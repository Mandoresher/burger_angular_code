import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currency = "$";
  loaderShowed = true;
  loader = true;

  mainImageStyle: any;
  orderImageStyle: any;

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required]
  });

  productsData: any; // = [
  // {
  //   image: "burger1.png",
  //   title: "Бургер чеддер & бекон",
  //   text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
  //   price: 8,
  //   basePrice: 8,
  //   grams: 360,
  // },
  // {
  //   image: "burger2.png",
  //   title: "BBQ с беконом и курицей",
  //   text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
  //   price: 7,
  //   basePrice: 7,
  //   grams: 390,
  // },
  // {
  //   image: "burger3.png",
  //   title: "Дабл биф бургер",
  //   text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
  //   price: 10,
  //   basePrice: 10,
  //   grams: 420,
  // },
  // {
  //   image: "burger4.png",
  //   title: "Баварский бургер",
  //   text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
  //   price: 7,
  //   basePrice: 7,
  //   grams: 220,
  // },
  // {
  //   image: "burger5.png",
  //   title: "Бекон чизбургер",
  //   text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
  //   price: 8,
  //   basePrice: 8,
  //   grams: 220,
  // },
  // {
  //   image: "burger6.png",
  //   title: "Индиана бургер",
  //   text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
  //   price: 9,
  //   basePrice: 9,
  //   grams: 320,
  // },
  // {
  //   image: "burger7.png",
  //   title: "Вегги бургер",
  //   text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
  //   price: 8,
  //   basePrice: 8,
  //   grams: 360,
  // },
  // {
  //   image: "burger8.png",
  //   title: "Плаксивый Джо",
  //   text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
  //   price: 7,
  //   basePrice: 7,
  //   grams: 380,
  // },
  // {
  //   image: "burger9.png",
  //   title: "Двойной чиз бургер",
  //   text: "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
  //   price: 11,
  //   basePrice: 11,
  //   grams: 400,
  // },
  // {
  //   image: "burger10.png",
  //   title: "Фрешбургер",
  //   text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
  //   price: 9,
  //   basePrice: 9,
  //   grams: 300,
  // },
  // {
  //   image: "burger11.png",
  //   title: "Цуккини бургер",
  //   text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
  //   price: 8,
  //   basePrice: 8,
  //   grams: 320,
  // },
  // {
  //   image: "burger12.png",
  //   title: "Двойной бургер чеддар",
  //   text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
  //   price: 9,
  //   basePrice: 9,
  //   grams: 360,
  // },

//  ];

  ngOnInit() {
    setTimeout(() => {
      this.loaderShowed = false;
    }, 1500);
    setTimeout(() => {
      this.loader = false;
    }, 2500);
    this.appService.getProduct().subscribe(data => this.productsData = data)
  }

  constructor(private fb: FormBuilder, private appService: AppService) {

  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(e: PointerEvent) {
    this.mainImageStyle = {transform: 'translate(-' + (e.clientX * 0.04) + 'px, -' + (e.clientY * 0.04) +'px)'}
    this.orderImageStyle = {transform: 'translate(-' + (e.clientX * 0.04) + 'px, -' + (e.clientY * 0.04) +'px)'}
  }

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }

  confirmOrder() {
    if (this.form.valid) {
      this.appService.sendOrder(this.form.value)
        .subscribe(
          {
            next: (response: any) => {
              alert(response.message);
              this.form.reset();
            },
            error: (response) => {
              alert(response.error.message);
            },
          }
        )
    }
  }

  changeCurrency() {
    let newCurrency = "$";
    let coefficient = 1;

    if (this.currency === "$") {
      newCurrency = "₽";
      coefficient = 90.03;
    } else if (this.currency === "₽") {
      newCurrency = "BYN";
      coefficient = 2.51;
    } else if (this.currency === "BYN") {
      newCurrency = "€";
      coefficient = 0.89;
    } else if (this.currency === "€") {
      newCurrency = "¥";
      coefficient = 7.14;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(0);
    })
  }

}



