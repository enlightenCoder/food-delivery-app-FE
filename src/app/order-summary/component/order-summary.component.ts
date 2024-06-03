import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodcataloguePage } from '../../shared/model/FoodCataloguePage';
import { OrderService } from '../service/OrderService';
import { OrderDto } from '../../shared/model/OrderDto';
import { error } from 'console';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  orderSummary : OrderDto;
  obj:any;
  total:any;
  showDialog:boolean=false;

  constructor(private route:ActivatedRoute, private router:Router, private orderService:OrderService){}

  ngOnInit(){
    const data = this.route.snapshot.queryParams['data'];
    console.log(data);
    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;
    console.log(this.orderSummary.restaurantDTO);
    this.total = this.orderSummary.foodItemList.reduce((accumulator,currentValue)=>{
    return accumulator + (currentValue.quantity * currentValue.price);
    },0);
  }

  saveOrder(){
    console.log("save order 1");
    console.log(this.orderSummary);
    this.orderService.saveOrder(this.orderSummary)
                      .subscribe(
                        response => {
                          console.log("save order 2");
                          this.showDialog = true;
                        },
                        error =>{
                            console.error('Failed to save data : ', error)
                        }
                      );
  }


  closeDialog(){
      this.showDialog = false;
      this.router.navigate(['/']);
  }

}