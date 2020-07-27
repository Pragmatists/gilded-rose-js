class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  ageItem () {
    if (this.name === 'Aged Brie') {
      this.increaseQuality()
    } else if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.increaseQuality()
    } else if (this.name === 'Sulfuras, Hand of Ragnaros') {

    } else {
      this.decreaseQuality()
    }
  }

  updateSellIn () {
    if (this.name === 'Sulfuras, Hand of Ragnaros') {
      return
    }
    this.sellIn = this.sellIn - 1
  }

  updateExpired () {
    if (this.name === 'Aged Brie') {
      this.increaseQuality(this)
    } else if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.quality = this.quality - this.quality
    } else if (this.name === 'Sulfuras, Hand of Ragnaros') {

    } else {
      this.decreaseQuality(item)
    }
  }


  decreaseQuality () {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }
  }

  increaseQuality () {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }
}

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      this.updateItems(item)
    }

    return this.items
  }

  updateItems (item) {
    item.updateSellIn()

    item.ageItem()

    if (item.sellIn < 0) {
      item.updateExpired()
    }
  }

}

module.exports = {
  Item,
  Shop
}
