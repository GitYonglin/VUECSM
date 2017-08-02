const data = {
  foodCategoryBase: {
    id: null,
    name: String,
    ingUrl: String,
    createDate: Date,
    modifyDate: Date
  },
  goodsCategoryBase: {
    id: null,
    name: String,
    ingUrl: String,
    createDate: Date,
    modifyDate: Date,
    imdex: Number,
    upId: null
  },
  foodBase: {
    id: null,
    name: '食材',
    unitPrice: 12.99,
    inventory: 999,
    desc: '不可描述',
    dose: 500,
    shelves: true,
    minNumber: 1,
    minAmount: 100,
    maxAmount: 100000,
    purchaseDate: '2017-07-11',
    createDate: '2017-07-11',
    modifyDate: '2017-07-11',
    hedgeDate: '2017-07-11',
    manufacturerInformation: {
      name: '大厂',
      address: '火星',
      contactInformation: '12345674567',
      productionDate: '2017-07-11',
      harvestDate: '2017-07-11'
    },
    pictureText: [
      // {
      //   imgUrl: '',
      //   desc: '蛮好的',
      //   imgFile: null
      // }
    ],
    foodCategory: [],
    goodsCategory: []
  },
  cookbookBase: {
    id: null,
    name: '食材',
    unitPrice: 12.99,
    inventory: 999,
    desc: '不可描述',
    shelves: true,
    createDate: '2017-07-11',
    modifyDate: '2017-07-11',
    pictureText: [
      // {
      //   imgUrl: '',
      //   desc: '不错',
      //   imgFile: null
      // }
    ],
    pictureTextCoures: [
      // {
      //   imgUrl: '',
      //   desc: '蛮好的',
      //   imgFile: null
      // }
    ],
    // foods: {
    //   staple: [{
    //     foodId: null,
    //     dosage: Number
    //   }],
    //   season: [{
    //     foodId: null,
    //     dosage: Number
    //   }],
    //   sauce: [{
    //     foodId: null,
    //     dosage: Number
    //   }],
    //   other: [{
    //     foodId: null,
    //     dosage: Number
    //   }]
    // },
    foods: [],
    goodsCategory: []
  },
  packBase: {
    id: null,
    name: '食材',
    unitPrice: 12.99,
    inventory: 999,
    desc: '不可描述',
    shelves: true,
    createDate: '2017-07-11',
    modifyDate: '2017-07-11',
    pictureText: [
      {
        imgUrl: '',
        desc: '不错',
        imgFile: null
      }
    ],
    foods: [],
    cookbooks: [],
    goodsCategory: []
  }

}

export default {
  ...data
}
