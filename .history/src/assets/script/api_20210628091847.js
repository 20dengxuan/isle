import $axios from 'axios';

export default (lang) => ({
  /* 公共接口 */
  // 展品类别选项
  categorySelection: (params) => $axios.get('/web/common/category-selection', { params }),
  // 国家选项
  countrySelection: (params) => $axios.get('/web/common/country-selection', { params }),
  // 行业选项
  industrySelection: (params) => $axios.get('/web/common/industry-selection', { params }),
  // 买家信息
  buyerInfo: (params) => $axios.get('/web/common/buyer-info', { params }),
  // 买家信息
  buyeunfinishInfo: (params) => $axios.get('/web/buyer/info', { params }),
  // 个人中心，检测用户是否可以编辑
  buyerCheckUserCanEdit: (params) => $axios.get('/web/buyer/check-user-can-edit-imformation', { params }),

  /* 其他接口 */
  // 关于
  getAbout: (params) => $axios.get('/api/survey/index', { params }),
  // 往届
  getPastinfo: (params) => $axios.get('/api/review/index', { params}),
  // 参展商注册时的选项
  getRegistorSelection: (params = {}) => $axios.get('/api/exhibitor_reserve/intentioncategory', { params }),
  // 参展商注册
  submitExhibitorRegistor: (body) => $axios.post('/api/exhibitor_reserve/add', body),
  // 展商名录
  getExhibitorDirectory: (params) => $axios.get('/web/exhibitor-list/list', { params }),
  // 获取国籍
  getCountrys: (params = {}) => $axios.get('/web/buyer/country', { params }),
  // 获取省份
  getProvinces: (params = {}) => $axios.get('/api/region/allprovinces', { params }),
  // 根据上级id获取下级地区
  getAreaById: (id) => $axios.get('/api/region/nest', { params: { lang, id } }),
  // 获取新闻列表信息
  getNewsList: (params = { page: 1, page_size: 12 }) => $axios.get('/api/news/list', { params }),
  getNewsById: (relate_id) => $axios.get('/api/news/detail', { params: { relate_id, lang } }),
  // 获取图片验证码
  getImgCode: () => $axios.get('/web/buyer/img-captcha'),
  // 发送短信验证码
  sendPhoneCode: (body) => $axios.post('/web/buyer/web-captcha', body),
  // 发送邮箱验证码
  sendEmailCode: (body) => $axios.post('/web/buyer/web-email-captcha', body),
  // 找回凭证
  getCertificate: (body) => $axios.post('/web/buyer/retrieve', body),
  // 展会推广列表
  getSpreadList: (params = { page: 1, page_size: 12 }) => $axios.get('/api/popularization/list', { params }),
  // 展会推广详情
  getSpreadDetail: (relate_id) => $axios.get('/api/popularization/detail', { params: { relate_id, lang } }),
  // 企业动态列表
  getEnterpriseList: (params = { page: 1, page_size: 12 }) => $axios.get('/api/enterprise_dynamics/list', { params }),
  // 企业动态详情
  getEnterpriseDetail: (relate_id) => $axios.get('/api/enterprise_dynamics/detail', { params: { relate_id, lang } }),
  // 行业动态列表
  getIndustryiseList: (params = { page: 1, page_size: 12 }) => $axios.get('/api/industry_dynamics/list', { params }),
  // 行业动态详情
  getIndustryDetail: (relate_id) => $axios.get('/api/industry_dynamics/detail', { params: { relate_id, lang } }),
  // 媒体合作列表
  getMediaList: (page, page_size = 12) => $axios.get('/api/media/list', { params: { page, page_size, lang } }),
  // 媒体合作详情
  getMediaDetail: (relate_id) => $axios.get('/api/media/detail', { params: { relate_id, lang } }),
  // 买家注册选项
  getVisitorRegisterOptions: (params = {}) => $axios.get('/web/buyer/selection', { params }),
  // 采购意向提交
  submitIntention: (body) => $axios.post('/web/buying-lead/add', body),
  // 意向列表
  getBuyingLeadList: (params = {}) => $axios.get('/web/buying-lead/list', { params }),
  // 采购类目
  getIntentionCategory: () => $axios.get('/api/purchasing_intention/procurementcategory', { params: { lang } }),
  // 下载中心
  getDocumentList: (params = {}) => $axios.get('/api/download/list', { params }),
  // 下载次数
  getDownloadTimes: (id) => $axios.post('/api/download/recorddownload', { id }),
  // 展馆列表
  getHalls: () => $axios.get('/web/region/get-region-venue'),
  // 展馆摊位
  getHallInfo: (venue_id) => $axios.get('/web/booth/get-venue-booth', { params: { venue_id } }),
  // 检测用户是否为老用户，是则返回数据，否则返回空数组
  testUser: (params) => $axios.get('/web/buyer/check-register', { params }),
  // 检测用户是否为老用户，是则返回数据，否则返回空数组
  testOverseasUser: (params) => $axios.get('/web/buyer/overseas-check-email', { params }),
  // 用户注册
  submitVisitorRegistor: (body) => $axios.post('/web/buyer/basic-register', body),
  // 根据用户凭证获取用户票据信息
  getTicket: (params) => $axios.get('/web/buyer/show', { params }),
  // 检测用户是否已注册
  checkout: (body) => $axios.post('/web/buyer/check-cellphone-email', body),
  // 找回成功发送短信
  sendMsg4GetBack: (body) => $axios.post('/web/buyer/confirm-retrieve', body),
  // 展品列表
  getExhibits: (params) => $axios.get('/web/exhibits/list', { params }),
  getExhibitsCategory: () => $axios.get('/web/exhibits/category-selection', { params: { lang } }),
  getExhibitDetail: (params) => $axios.get('/web/exhibits/view', { params }),
  getExhibitBrand: (params) => $axios.get('/web/exhibits/brand-selection', { params }),
  // 询盘
  getRnquiryIndustry: (params) => $axios.get('/web/enquiry/industry-selection', { params }),
  addinquiry: (body) => $axios.post('/web/enquiry/add', body),
  getlistwithdate: (params) => $axios.get('/web/enquiry/list-with-date', { params }),
  getinquirydetail: (params) => $axios.get('/web/enquiry/detail', { params }),
  replayinquiry: (body) => $axios.post('/web/enquiry/replay', body),
  readinquiry: (params) => $axios.get('/web/enquiry/read', { params }),
  hasenquiry: (params) => $axios.get('/web/enquiry/has-enquiry', { params }),
  getRnquiryIntention: (params) => $axios.get('/web/enquiry/intention-selection', { params }),
  // 展商下拉选择
  getExhibitSelection: (params) => $axios.get('/web/exhibitor-list/company-selection', { params }),
  // 智选
  getExhibitHotlist: (params) => $axios.get('/web/exhibits/smart', { params }),
  // 展区列表
  getExhibitArea: (params) => $axios.get('/web/exhibits/area', { params }),
  // 展区展品列表
  getExhibitFlow: (params) => $axios.get('/web/exhibits/flow', { params }),
  getExhibitCategorylist: (params) => $axios.get('/web/exhibits/category-list', { params }),
  // 统计观看量
  watchedVideo: (id) => $axios.post('/api/video/mark', { id }),
  // 激活买家
  activeBuyer: (params) => $axios.get('/web/buyer/active-buyer', { params }),
  // 境外买家注册
  overseasRegister: (body) => $axios.post('/web/buyer/overseas-register', body),
  // 获取联登客户端ID
  getUnionClientId: (params) => $axios.get('/web/socialite/client-id', { params }),
  // 保存联登时获取的用户信息
  saveUnionUserInfo: (body) => $axios.post('/web/socialite/create', body),
  // 获取会议论坛列表
  getMeetingList: () => $axios.get('/web/meeting/list', { params: { lang } }),
  // 查看会议
  getMeetingShow: (body) => $axios.get('/web/meeting/show', { params: Object.assign(body, { lang }) }),
  // 报名
  sendMeetingEnroll: (body) => $axios.post('/web/meeting/enroll', Object.assign(body, { lang })),
  // 登录
  signIn: (body) => $axios.post('/web/buyer/login', body),
  // 注销
  signOut: (body) => $axios.post('/web/buyer/logout', body),
  // 深航
  shenZhenAir: (body) => $axios.post('/api/special/shenzhenair', body),
  // 获取商务考察列表
  getBusinessTripList: (params) => $axios.get('/web/business-trip/list-with-detail', { params }),
  // 查看当前预约行程信息
  chackBusinessTripInfo: (params) => $axios.get('/web/business-trip/show', { params }),
  // 提交预约商旅考察信息
  subBusinessTripInfo: (body) => $axios.post('/web/business-trip/enroll', body),
  // 企业基本信息
  exhibitorListInfo: (body) => $axios.get('/web/exhibitor-list/info', { params: body }),
  // 企业明星产品
  exhibitorListStarList: (body) => $axios.get('/web/exhibitor-list/star-list', { params: body }),
  // 企业展品分类
  exhibitorCategory: (body) => $axios.get('/web/exhibitor-list/category', { params: body }),
  // 企业所有展品
  exhibitorListAllList: (body) => $axios.get('/web/exhibitor-list/all-list', { params: body }),
  // 获取我的询盘记录
  getMyInquiryRecord: (params) => $axios.get('/web/enquiry/list', { params }),
  // 展品名称模糊查询
  gettitlelist: (params) => $axios.get('/web/exhibits/title-list', { params }),
  // 直播列表接口
  getlivelist: (params) => $axios.get('/web/live/list', { params }),
  // 直播详情接口
  getlivedetail: (params) => $axios.get('/web/live/detail', { params }),
  // 获取首条直播
  getFirstLiveInfo: (params) => $axios.get('/web/live/first', { params }),
  // 直播点赞接口
  liveLike: (body) => $axios.post('/web/live/like', body),
  // 视频列表
  getVideoList: (params = { lang: 'zh', page: 1, page_size: 12 }) => $axios.get('/web/video/list', { params }),
  // 视频观看监听
  getVideoListen: (body) => $axios.post('/web/video/listen', body),
  // 发送短信验证码
  fastLoginSmsCaptcha: (body) => $axios.post('/web/fast-login/get-sms-captcha', body),
  // 发送邮件验证码
  fastLoginEmailCaptcha: (body) => $axios.post('/web/fast-login/get-email-captcha', body),
  // 登入
  fastLoginLogin: (body) => $axios.post('/web/fast-login/login', body),
  // 专题页直播
  getLiveTopic: (params) => $axios.get('/web/live/topic', { params }),
  // 明星企业
  getExhibitBrilliant: (params) => $axios.get('/web/exhibitor-list/brilliant', { params }),
  // 问卷选项
  getQuestionnaire: (params) => $axios.get('/web/common/questionnaire', { params }),
  // 预登记步骤三
  submitVisitorInfo: (body) => $axios.post('/web/buyer/refine-register', body),
  // 预登记步骤三展商选项
  getExhibitorOptions: (params) => $axios.get('/web/common/exhibitor-options', { params }),
  // 企业展厅推荐
  getExhibitorRecommend: (params) => $axios.get('/web/exhibitor-list/exhibitor-recommend', { params }),
  getRegisterRecommend: (params) => $axios.get('/web/exhibitor-list/register-recommend', { params }),
  // 新票证页接口
  getEntranceTicket: (params) => $axios.get('/web/buyer/entrance-ticket', { params }),
  // 用户勾选分类
  getChooseExhibitCategory: (params) => $axios.get('/web/exhibitor-list/exhibit-category', { params }),
  // 添加邀请
  addInvitation: (body) => $axios.post('/web/buyer/add-invitation', body),
  // 我的邀请
  getMyInvitation: (params) => $axios.get('/web/buyer/my-invitation', { params }),
  // 预登记是否展示展会推广
  getSpreadVisible: (params) => $axios.get('/web/exhibitor-list/has-promotion', { params }),
});
