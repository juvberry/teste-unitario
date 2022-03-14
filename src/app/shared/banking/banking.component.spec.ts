import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

import { ListComponent } from '../investments/components/list/list.component';
import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BankingComponent,
        ListComponent,
      ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`
    (U) getPoupanca(): poupanca should have = 10`, () => {
      expect(component.getPoupanca).toEqual(10)
  });

  it(`(U) getCarteira(): carteira should have = 50`, () => {
      expect(component.getCarteira).toEqual(50)
  });

  it(`(U) setSacar(): should transfer to poupanca from carteira`, () => {
    component.setSacar(`10`)

    expect(component.getPoupanca).toEqual(0)
    expect(component.getCarteira).toEqual(60)
  })

  it(`(I) setSacar(): should transfer to poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement

    el.querySelector('#input-sacar').value = '10'
    el.querySelector('#sacar').click()
    fixture.detectChanges()

    expect(el.querySelector('#get-carteira').textContent).toEqual('60')
  })

  it(`(U) setSacar(): should be number(isNaN) or shouldnt be less than poupanca`, () => {
    expect(component.setSacar(`string`)).not.toBeTruthy()
    expect(component.setSacar(`100`)).not.toBeTruthy()
    expect(component.getPoupanca).toEqual(10)
    expect(component.getCarteira).toEqual(50)
  })

  it(`(U) setDepositar(): should transfer to carteira from poupanca`, () => {
    component.setDepositar('50')

    expect(component.getCarteira).toEqual(0)
    expect(component.getPoupanca).toEqual(60)
  })

  it(`(U) setDepositar(): should be number(isNaN) or shouldnt be less than carteira`, () => {
    expect(component.setDepositar(`string`)).not.toBeTruthy()
    expect(component.setDepositar(`100`)).not.toBeTruthy()
    expect(component.getPoupanca).toEqual(10)
    expect(component.getCarteira).toEqual(50)
  })
  
  it(`(I) setDepositar(): should transfer to carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement

    el.querySelector('#input-depositar').value = '10'
    el.querySelector('#depositar').click()
    fixture.detectChanges()

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20')
  })
});
