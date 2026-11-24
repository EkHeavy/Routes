import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  computed,
  signal
} from '@angular/core';

interface CatalogStats {
  routeCount: number;
  favoriteCount: number;
  apiStatus: 'loading' | 'success' | 'error';
}


@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly routeCount = signal(0);
  protected readonly favoriteCount = signal(0);

  protected readonly apiStatus =
    signal<CatalogStats['apiStatus']>('loading');


  // Выбранные даты поездки
  protected readonly tripStartDate = signal('');
  protected readonly tripEndDate = signal('');


  // Ссылки на скрытые поля даты из app.html
  @ViewChild('startDatePicker')
  protected startDatePicker!: ElementRef<HTMLInputElement>;

  @ViewChild('endDatePicker')
  protected endDatePicker!: ElementRef<HTMLInputElement>;


  // Открытие календарей
  protected openStartDatePicker(): void {
    this.startDatePicker.nativeElement.showPicker();
  }

  protected openEndDatePicker(): void {
    this.endDatePicker.nativeElement.showPicker();
  }


  // Сохранение выбранных дат
  protected setTripStartDate(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.tripStartDate.set(input.value);

    if (
      this.tripEndDate() &&
      this.tripEndDate() < input.value
    ) {
      this.tripEndDate.set('');
    }
  }

  protected setTripEndDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tripEndDate.set(input.value);
  }


  // Проверка правильности дат
  protected readonly dateError = computed(() => {
    const startDate = this.tripStartDate();
    const endDate = this.tripEndDate();

    if (!startDate || !endDate) {
      return '';
    }

    if (endDate < startDate) {
      return 'Дата окончания не может быть раньше даты начала';
    }

    return '';
  });


  // Обе даты заполнены и корректны
  protected readonly datesAreValid = computed(() => {
    return Boolean(
      this.tripStartDate() &&
      this.tripEndDate() &&
      !this.dateError()
    );
  });


  // Получение статистики из React
  protected updateStats(event: Event): void {
    const detail =
      (event as CustomEvent<CatalogStats>).detail;

    if (!detail) {
      return;
    }

    this.routeCount.set(detail.routeCount);
    this.favoriteCount.set(detail.favoriteCount);
    this.apiStatus.set(detail.apiStatus);
  }
}