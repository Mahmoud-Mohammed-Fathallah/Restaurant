import { integer } from 'aws-sdk/clients/cloudfront';
import db from './sequalize';

export class OrderItem {

  async create_orderItem(order_id: Number, item_id: Number, amount: Number, price: Number) {

    let item = await db['OrderItems'].findAll({
      where: {
        order_id: [order_id],
        item_id: [item_id]
      }
    });

    if (JSON.stringify(item).length < 3) {
      await db['OrderItems'].create({ order_id: order_id, item_id: item_id, amount: amount, price: price });
      return "item added correctly";
    } else {
      return "item already exist";
    }
  }

  async create_orderitems(req: any) {
    let item = await db['OrderItems'].findAll({
      where: {
        order_id: [req.order_id],
        item_id: [req.item_id]
      }
    });

    if (JSON.stringify(item).length < 3) {
      await db['OrderItems'].create({ order_id: req.order_id, item_id: req.item_id, amount_required: req.amount});
      return "item added correctly";
    } else {
      return "item already exist";
    }
  }

  async get_items(order_id:any) {
    let item = await db['OrderItems'].findAll({
      where: {
        order_id: [order_id]
      }
    });
   /* if (JSON.stringify(item).length < 3) {
      return "order id doesn't exist";
    } else {
      return item;
    }*/
    console.log(order_id);/////
    return item;

  }
}