const { Shop, Item } = require('../src/gilded_rose')

describe('Gilded Rose', function () {
  it('print all values', function () {
    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new Item('Conjured Mana Cake', 3, 6)
    ]

    const days = Number(process.argv[2]) || 2
    const gildedRose = new Shop(items)
    let result =''
    for (let day = 0; day < days; day++) {
      result+=`\n-------- day ${day} --------`
      result+='name, sellIn, quality\n'
      items.forEach(item => result+=`${item.name}, ${item.sellIn}, ${item.quality}\n`)
      gildedRose.updateQuality()
    }

    expect(result).toBe("\n" +
      "-------- day 0 --------name, sellIn, quality\n" +
      "+5 Dexterity Vest, 10, 20\n" +
      "Aged Brie, 2, 0\n" +
      "Elixir of the Mongoose, 5, 7\n" +
      "Sulfuras, Hand of Ragnaros, 0, 80\n" +
      "Sulfuras, Hand of Ragnaros, -1, 80\n" +
      "Backstage passes to a TAFKAL80ETC concert, 15, 20\n" +
      "Backstage passes to a TAFKAL80ETC concert, 10, 49\n" +
      "Backstage passes to a TAFKAL80ETC concert, 5, 49\n" +
      "Conjured Mana Cake, 3, 6\n" +
      "\n" +
      "-------- day 1 --------name, sellIn, quality\n" +
      "+5 Dexterity Vest, 9, 19\n" +
      "Aged Brie, 1, 1\n" +
      "Elixir of the Mongoose, 4, 6\n" +
      "Sulfuras, Hand of Ragnaros, 0, 80\n" +
      "Sulfuras, Hand of Ragnaros, -1, 80\n" +
      "Backstage passes to a TAFKAL80ETC concert, 14, 21\n" +
      "Backstage passes to a TAFKAL80ETC concert, 9, 50\n" +
      "Backstage passes to a TAFKAL80ETC concert, 4, 50\n" +
      "Conjured Mana Cake, 2, 5\n");
  })
})

