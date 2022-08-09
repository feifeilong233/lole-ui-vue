const Ajv = require("ajv").default
const localize = require("ajv-i18n") //转换错误信息语言
const ajv = new Ajv({ allErrors: true}) // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv) // 自定义错误信息

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      format: 'test',
      // format:'email'
      test: true,
      minLength: 10,
      // 自定义错误信息
      errorMessage: {
        type: '类型必须是字符串',
        // minLength: '长度必须是10'
      }
    },
    age: {
      type: 'number'
    },
    pets: {
      type: 'array'
    },
    isWorker: {
      type: 'boolean'
    },
  },
  required: ['name', 'age']
}


// 自定义关键字
ajv.addKeyword({
  keyword: 'test',
  // validate: (schema, data) => {
  //   console.log(schema, data, '---------------');
  //   return data === 'hdssdfsddfsdh'
  // },

  // 执行规则校验，返回function
  // compile: (sch, parentSchema) => {
  //   console.log(sch, parentSchema, '---------');
  //   return (data) =>  data === 'hdssdfsddfsdh'
  // },

  // 每个引用该关键字（这里是test）的schema都可添加macro中引用的所有规则
  macro: (sch, parentSchema) => {
    console.log('schema',sch, 'parentSchema',parentSchema, '---------');
    return {
      minLength: 10
    }
  },
  
  // 定义keyword的校验规则
  metaSchema: {
    type: 'boolean'
  }
})

// 自定义格式
ajv.addFormat('test',(data)=>{
  console.log(data, '----------------');
  return 'hdsfsdsdfh' === data
})


const validate = ajv.compile(schema) // 创建编译器

const validData = {
  name: 45,
  age: 18,
  pets: ['momo', 'mingjiu'],
  isWorker: true
}

const valid = validate(validData)
console.log(valid)
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}