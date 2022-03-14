import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) investments list should have 4 length and correct names', () => {
    let investments = component.investments
    expect(investments.length).toBe(4)
    expect(investments[0].name).toContain('Itaú')
    expect(investments[3].name).toContain('Nubank')
  })

  it('(I) investments list should have 4 length and textContent equal to HTML', () => {
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens')
    expect(investments.length).toBe(4)
    expect(investments[0].textContent.trim()).toEqual('Itaú | 100')
    expect(investments[3].textContent.trim()).toEqual('Nubank | 100')
  })
});
