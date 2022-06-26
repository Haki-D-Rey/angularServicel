/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Categoria, CATEGORTIES } from '../admin/categoria/categoria.component';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './table.directive';

interface SearchResult {
  table: any[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(
  table: any[],
  column: SortColumn,
  direction: string
): Categoria[] {
  if (direction === '' || column === '') {
    return table;
  } else {
    return [...table].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(table: any, term: string, pipe: PipeTransform) {
  return (
    table.nombreCategoria.toLowerCase().includes(term.toLowerCase()) ||
    table.descripcion.toLowerCase().includes(term.toLowerCase()) ||
    table.fechaRegistro.includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class tablaService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _table$ = new BehaviorSubject<any[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._table$.next(result.table);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get table$() {
    return this._table$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._state;

    // 1. sort
    let table = sort(CATEGORTIES, sortColumn, sortDirection);

    // 2. filter
    table = table.filter((country) => matches(country, searchTerm, this.pipe));
    const total = table.length;

    // 3. paginate
    table = table.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ table, total });
  }
}