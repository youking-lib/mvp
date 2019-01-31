import BaseModel from './Base'

class PostModel extends BaseModel {
  constructor () {
    super()

    this.getPostApi = applyNewPostValidator(this.api.getPost)
  }

  /**
   * 获取文章
   * @param {Object} opt 
   *  - {String} type
   */
  async getPost (opt) {
    const result = this.getPostApi(opt)
    
    return result
  }
}

function applyNewPostValidator (fun) {
  return async opt => {
    // validate opt
    if (!opt.type) {
      return {
        errMessage: '类型不能为空！'
      }
    }

    let result

    try {
      result = await fun(opt)
    } catch (err) {
      return {
        errMessage: '网络错误'
      }
    }

    if (result.status !== 0) {
      return {
        errMessage: result.errMessage,
        errCode: result.status
      }
    }

    return {
      data: result.data
    }
  }
}

export default new PostModel()
