"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inversify = require("inversify");

require("reflect-metadata");

var _express = require("express");

var _TYPES = _interopRequireDefault(require("./TYPES"));

var _inversify2 = _interopRequireDefault(require("./Presentation/Controllers/Entity/inversify"));

var _inversify3 = _interopRequireDefault(require("./Presentation/Controllers/Magnitude/inversify"));

var _inversify4 = _interopRequireDefault(require("./Presentation/Controllers/Instrument/inversify"));

var _inversify5 = _interopRequireDefault(require("./Presentation/Controllers/Business/inversify"));

var _inversify6 = _interopRequireDefault(require("./Presentation/Controllers/Certificate/inversify"));

var _inversify7 = _interopRequireDefault(require("./Presentation/Controllers/Calibration/inversify"));

var _inversify8 = _interopRequireDefault(require("./Presentation/Controllers/Area/inversify"));

var _inversify9 = _interopRequireDefault(require("./Presentation/Controllers/Unit/inversify"));

var _inversify10 = _interopRequireDefault(require("./Presentation/Controllers/Alert/inversify"));

var _inversify11 = _interopRequireDefault(require("./Presentation/Controllers/Configuration/inversify"));

var _inversify12 = _interopRequireDefault(require("./Presentation/Controllers/Blue/inversify"));

var _inversify13 = _interopRequireDefault(require("./Presentation/Controllers/Usdt/inversify"));

var _inversify14 = _interopRequireDefault(require("./Presentation/Controllers/Wire/inversify"));

var _inversify15 = _interopRequireDefault(require("./Presentation/Controllers/Investment/inversify"));

var _inversify16 = _interopRequireDefault(require("./Presentation/Controllers/Transfer/inversify"));

var _inversify17 = _interopRequireDefault(require("./Presentation/Controllers/Check/inversify"));

var _inversify18 = _interopRequireDefault(require("./Presentation/Controllers/Account/inversify"));

var _inversify19 = _interopRequireDefault(require("./Presentation/Controllers/Movement/inversify"));

var _inversify20 = _interopRequireDefault(require("./Presentation/Controllers/Interest/inversify"));

var _inversify21 = _interopRequireDefault(require("./Presentation/Controllers/Loan/inversify"));

var _inversify22 = _interopRequireDefault(require("./Presentation/Controllers/Box/inversify"));

var _inversify23 = _interopRequireDefault(require("./Presentation/Controllers/Item/inversify"));

var _inversify24 = _interopRequireDefault(require("./Presentation/Controllers/Purchase/inversify"));

var _inversify25 = _interopRequireDefault(require("./Presentation/Controllers/Sale/inversify"));

var _inversify26 = _interopRequireDefault(require("./Presentation/Controllers/Plan/inversify"));

var _inversify27 = _interopRequireDefault(require("./Presentation/Controllers/Shipping/inversify"));

var _inversify28 = _interopRequireDefault(require("./Presentation/Controllers/Code/inversify"));

var _inversify29 = _interopRequireDefault(require("./Presentation/Controllers/Strain/inversify"));

var _inversify30 = _interopRequireDefault(require("./Presentation/Controllers/Type/inversify"));

var _inversify31 = _interopRequireDefault(require("./Presentation/Controllers/Store/inversify"));

var _inversify32 = _interopRequireDefault(require("./Presentation/Controllers/Information/inversify"));

var _inversify33 = _interopRequireDefault(require("./Presentation/Controllers/Tag/inversify"));

var _inversify34 = _interopRequireDefault(require("./Presentation/Controllers/Section/inversify"));

var _app = _interopRequireDefault(require("./app"));

var _Authentication = _interopRequireDefault(require("./Aplication/Services/Authentication"));

var _TokenProvider = _interopRequireDefault(require("./Aplication/Services/TokenProvider"));

var _Responser = _interopRequireDefault(require("./Presentation/Controllers/Util/Responser"));

var _Authentication2 = _interopRequireDefault(require("./Presentation/Middlewares/Authentication"));

var _AgreementStorage = _interopRequireDefault(require("./Presentation/Controllers/Util/AgreementStorage"));

var _ConnectionProvider = _interopRequireDefault(require("./Infrastructure/Persistence/ConnectionProvider"));

var _Validation = _interopRequireDefault(require("./Domain/Middleware/Validation"));

var _Controller = _interopRequireDefault(require("./Domain/Entities/Util/Controller"));

var _Responser2 = _interopRequireDefault(require("./Domain/Entities/Util/Responser"));

var _SendMail = _interopRequireDefault(require("./Aplication/UC/SendMail"));

var _Model = _interopRequireDefault(require("./Domain/Entities/User/Model"));

var _Model2 = _interopRequireDefault(require("./Domain/Entities/Session/Model"));

var _Model3 = _interopRequireDefault(require("./Domain/Entities/Company/Model"));

var _Model4 = _interopRequireDefault(require("./Domain/Entities/Bank/Model"));

var _Model5 = _interopRequireDefault(require("./Domain/Entities/Category/Model"));

var _Model6 = _interopRequireDefault(require("./Domain/Entities/Transaction/Model"));

var _Model7 = _interopRequireDefault(require("./Domain/Entities/Subcategory/Model"));

var _Model8 = _interopRequireDefault(require("./Domain/Entities/Message/Model"));

var _Controller2 = _interopRequireDefault(require("./Domain/Entities/User/Controller"));

var _Controller3 = _interopRequireDefault(require("./Domain/Entities/Session/Controller"));

var _Controller4 = _interopRequireDefault(require("./Domain/Entities/Company/Controller"));

var _Controller5 = _interopRequireDefault(require("./Domain/Entities/Bank/Controller"));

var _Controller6 = _interopRequireDefault(require("./Domain/Entities/Category/Controller"));

var _Controller7 = _interopRequireDefault(require("./Domain/Entities/Transaction/Controller"));

var _Controller8 = _interopRequireDefault(require("./Domain/Entities/Subcategory/Controller"));

var _Controller9 = _interopRequireDefault(require("./Domain/Entities/Message/Controller"));

var _Dto = _interopRequireDefault(require("./Presentation/Controllers/Authentication/Dto"));

var _Dto2 = _interopRequireDefault(require("./Domain/Entities/User/Dto"));

var _Dto3 = _interopRequireDefault(require("./Domain/Entities/Session/Dto"));

var _Dto4 = _interopRequireDefault(require("./Domain/Entities/Company/Dto"));

var _Dto5 = _interopRequireDefault(require("./Domain/Entities/Bank/Dto"));

var _Dto6 = _interopRequireDefault(require("./Domain/Entities/Category/Dto"));

var _Dto7 = _interopRequireDefault(require("./Domain/Entities/Transaction/Dto"));

var _Dto8 = _interopRequireDefault(require("./Domain/Entities/Subcategory/Dto"));

var _Dto9 = _interopRequireDefault(require("./Domain/Entities/Message/Dto"));

var _Builder = _interopRequireDefault(require("./Domain/Entities/Session/Builder"));

var _Controller10 = _interopRequireDefault(require("./Presentation/Controllers/Authentication/Controller"));

var _Controller11 = _interopRequireDefault(require("./Presentation/Controllers/User/Controller"));

var _Controller12 = _interopRequireDefault(require("./Presentation/Controllers/Session/Controller"));

var _Controller13 = _interopRequireDefault(require("./Presentation/Controllers/Company/Controller"));

var _Controller14 = _interopRequireDefault(require("./Presentation/Controllers/Bank/Controller"));

var _Controller15 = _interopRequireDefault(require("./Presentation/Controllers/Category/Controller"));

var _Controller16 = _interopRequireDefault(require("./Presentation/Controllers/Transaction/Controller"));

var _Controller17 = _interopRequireDefault(require("./Presentation/Controllers/Subcategory/Controller"));

var _Controller18 = _interopRequireDefault(require("./Presentation/Controllers/Message/Controller"));

var _Model9 = _interopRequireDefault(require("./Domain/Entities/Post/Model"));

var _Controller19 = _interopRequireDefault(require("./Domain/Entities/Post/Controller"));

var _Dto10 = _interopRequireDefault(require("./Domain/Entities/Post/Dto"));

var _Controller20 = _interopRequireDefault(require("./Presentation/Controllers/Post/Controller"));

var _Model10 = _interopRequireDefault(require("./Domain/Entities/Proposal/Model"));

var _Controller21 = _interopRequireDefault(require("./Domain/Entities/Proposal/Controller"));

var _Dto11 = _interopRequireDefault(require("./Domain/Entities/Proposal/Dto"));

var _Controller22 = _interopRequireDefault(require("./Presentation/Controllers/Proposal/Controller"));

var _Model11 = _interopRequireDefault(require("./Domain/Entities/ProposalState/Model"));

var _Controller23 = _interopRequireDefault(require("./Domain/Entities/ProposalState/Controller"));

var _Dto12 = _interopRequireDefault(require("./Domain/Entities/ProposalState/Dto"));

var _Controller24 = _interopRequireDefault(require("./Presentation/Controllers/ProposalState/Controller"));

var _Model12 = _interopRequireDefault(require("./Domain/Entities/Permission/Model"));

var _Controller25 = _interopRequireDefault(require("./Domain/Entities/Permission/Controller"));

var _Dto13 = _interopRequireDefault(require("./Domain/Entities/Permission/Dto"));

var _Controller26 = _interopRequireDefault(require("./Presentation/Controllers/Permission/Controller"));

var _Model13 = _interopRequireDefault(require("./Domain/Entities/Rol/Model"));

var _Controller27 = _interopRequireDefault(require("./Domain/Entities/Rol/Controller"));

var _Dto14 = _interopRequireDefault(require("./Domain/Entities/Rol/Dto"));

var _Controller28 = _interopRequireDefault(require("./Presentation/Controllers/Rol/Controller"));

var _Model14 = _interopRequireDefault(require("./Domain/Entities/Mail/Model"));

var _Controller29 = _interopRequireDefault(require("./Domain/Entities/Mail/Controller"));

var _Dto15 = _interopRequireDefault(require("./Domain/Entities/Mail/Dto"));

var _Controller30 = _interopRequireDefault(require("./Presentation/Controllers/Mail/Controller"));

var _Model15 = _interopRequireDefault(require("./Domain/Entities/Payment/Model"));

var _Controller31 = _interopRequireDefault(require("./Domain/Entities/Payment/Controller"));

var _Dto16 = _interopRequireDefault(require("./Domain/Entities/Payment/Dto"));

var _Controller32 = _interopRequireDefault(require("./Presentation/Controllers/Payment/Controller"));

var _Model16 = _interopRequireDefault(require("./Domain/Entities/Subscription/Model"));

var _Controller33 = _interopRequireDefault(require("./Domain/Entities/Subscription/Controller"));

var _Dto17 = _interopRequireDefault(require("./Domain/Entities/Subscription/Dto"));

var _Controller34 = _interopRequireDefault(require("./Presentation/Controllers/Subscription/Controller"));

var _Model17 = _interopRequireDefault(require("./Domain/Entities/Course/Model"));

var _Controller35 = _interopRequireDefault(require("./Domain/Entities/Course/Controller"));

var _Dto18 = _interopRequireDefault(require("./Domain/Entities/Course/Dto"));

var _Controller36 = _interopRequireDefault(require("./Presentation/Controllers/Course/Controller"));

var _Model18 = _interopRequireDefault(require("./Domain/Entities/Student/Model"));

var _Controller37 = _interopRequireDefault(require("./Domain/Entities/Student/Controller"));

var _Dto19 = _interopRequireDefault(require("./Domain/Entities/Student/Dto"));

var _Controller38 = _interopRequireDefault(require("./Presentation/Controllers/Student/Controller"));

var _Model19 = _interopRequireDefault(require("./Domain/Entities/Link/Model"));

var _Controller39 = _interopRequireDefault(require("./Domain/Entities/Link/Controller"));

var _Dto20 = _interopRequireDefault(require("./Domain/Entities/Link/Dto"));

var _Controller40 = _interopRequireDefault(require("./Presentation/Controllers/Link/Controller"));

var _Model20 = _interopRequireDefault(require("./Domain/Entities/File/Model"));

var _Controller41 = _interopRequireDefault(require("./Domain/Entities/File/Controller"));

var _Dto21 = _interopRequireDefault(require("./Domain/Entities/File/Dto"));

var _Controller42 = _interopRequireDefault(require("./Presentation/Controllers/File/Controller"));

var _Model21 = _interopRequireDefault(require("./Domain/Entities/Exam/Model"));

var _Controller43 = _interopRequireDefault(require("./Domain/Entities/Exam/Controller"));

var _Dto22 = _interopRequireDefault(require("./Domain/Entities/Exam/Dto"));

var _Controller44 = _interopRequireDefault(require("./Presentation/Controllers/Exam/Controller"));

var _Model22 = _interopRequireDefault(require("./Domain/Entities/Question/Model"));

var _Controller45 = _interopRequireDefault(require("./Domain/Entities/Question/Controller"));

var _Dto23 = _interopRequireDefault(require("./Domain/Entities/Question/Dto"));

var _Controller46 = _interopRequireDefault(require("./Presentation/Controllers/Question/Controller"));

var _Model23 = _interopRequireDefault(require("./Domain/Entities/QuestionType/Model"));

var _Controller47 = _interopRequireDefault(require("./Domain/Entities/QuestionType/Controller"));

var _Dto24 = _interopRequireDefault(require("./Domain/Entities/QuestionType/Dto"));

var _Controller48 = _interopRequireDefault(require("./Presentation/Controllers/QuestionType/Controller"));

var _Model24 = _interopRequireDefault(require("./Domain/Entities/Quiz/Model"));

var _Controller49 = _interopRequireDefault(require("./Domain/Entities/Quiz/Controller"));

var _Dto25 = _interopRequireDefault(require("./Domain/Entities/Quiz/Dto"));

var _Controller50 = _interopRequireDefault(require("./Presentation/Controllers/Quiz/Controller"));

var _Model25 = _interopRequireDefault(require("./Domain/Entities/QuestionQuiz/Model"));

var _Controller51 = _interopRequireDefault(require("./Domain/Entities/QuestionQuiz/Controller"));

var _Dto26 = _interopRequireDefault(require("./Domain/Entities/QuestionQuiz/Dto"));

var _Controller52 = _interopRequireDefault(require("./Presentation/Controllers/QuestionQuiz/Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Containers
// Implementations
// Single
// Repeat
var container = new _inversify.Container();
container.bind(_TYPES["default"].SendeableMail).to(_SendMail["default"]);
container.bind(_TYPES["default"].Appeable).to(_app["default"]);
container.bind(_TYPES["default"].Responseable).to(_Responser["default"]);
container.bind(_TYPES["default"].Authenticateable).to(_Authentication2["default"]);
container.bind(_TYPES["default"].ConnectionableProvider).to(_ConnectionProvider["default"]);
container.bind(_TYPES["default"].GeteableModel).to(_ConnectionProvider["default"]);
container.bind(_TYPES["default"].Validateable).to(_Validation["default"]);
container.bind(_TYPES["default"].Router).toConstantValue((0, _express.Router)());
container.bind(_TYPES["default"].ResponseableDomain).to(_Responser2["default"]);
container.bind(_TYPES["default"].Authenticable).to(_Authentication["default"]);
container.bind(_TYPES["default"].CreateableToken).to(_TokenProvider["default"]);
container.bind(_TYPES["default"].Controlleable).to(_Controller["default"]);
container.bind(_TYPES["default"].Updateable).to(_Controller["default"]);
container.bind(_TYPES["default"].GeteableAll).to(_Controller["default"]);
container.bind(_TYPES["default"].GeteableById).to(_Controller["default"]);
container.bind(_TYPES["default"].Saveable).to(_Controller["default"]);
container.bind(_TYPES["default"].Searcheable).to(_Controller["default"]);
container.bind(_TYPES["default"].GeteableCompanyStorage).to(_AgreementStorage["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model["default"]()).whenTargetNamed(_TYPES["default"].User);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model2["default"]()).whenTargetNamed(_TYPES["default"].Session);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model3["default"]()).whenTargetNamed(_TYPES["default"].Company);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model4["default"]()).whenTargetNamed(_TYPES["default"].Bank);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model5["default"]()).whenTargetNamed(_TYPES["default"].Category);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model6["default"]()).whenTargetNamed(_TYPES["default"].Transaction);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model7["default"]()).whenTargetNamed(_TYPES["default"].Subcategory);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model8["default"]()).whenTargetNamed(_TYPES["default"].Message);
container.bind(_TYPES["default"].Validable).to(_Dto["default"]).whenTargetNamed(_TYPES["default"].Login);
container.bind(_TYPES["default"].Validable).to(_Dto2["default"]).whenTargetNamed(_TYPES["default"].User);
container.bind(_TYPES["default"].Validable).to(_Dto3["default"]).whenTargetNamed(_TYPES["default"].Session);
container.bind(_TYPES["default"].Validable).to(_Dto4["default"]).whenTargetNamed(_TYPES["default"].Company);
container.bind(_TYPES["default"].Validable).to(_Dto5["default"]).whenTargetNamed(_TYPES["default"].Bank);
container.bind(_TYPES["default"].Validable).to(_Dto6["default"]).whenTargetNamed(_TYPES["default"].Category);
container.bind(_TYPES["default"].Validable).to(_Dto7["default"]).whenTargetNamed(_TYPES["default"].Transaction);
container.bind(_TYPES["default"].Validable).to(_Dto8["default"]).whenTargetNamed(_TYPES["default"].Subcategory);
container.bind(_TYPES["default"].Validable).to(_Dto9["default"]).whenTargetNamed(_TYPES["default"].Message);
container.bind(_TYPES["default"].UserInterface).toConstantValue(new _Dto2["default"]());
container.bind(_TYPES["default"].SessionInterface).toConstantValue(new _Dto3["default"]());
container.bind(_TYPES["default"].CompanyInterface).toConstantValue(new _Dto4["default"]());
container.bind(_TYPES["default"].BankInterface).toConstantValue(new _Dto5["default"]());
container.bind(_TYPES["default"].CategoryInterface).toConstantValue(new _Dto6["default"]());
container.bind(_TYPES["default"].TransactionInterface).toConstantValue(new _Dto7["default"]());
container.bind(_TYPES["default"].SubcategoryInterface).toConstantValue(new _Dto8["default"]());
container.bind(_TYPES["default"].MessageInterface).toConstantValue(new _Dto9["default"]());
container.bind(_TYPES["default"].SessionBuilderable).to(_Builder["default"]);
container.bind(_TYPES["default"].UserServiceableDomain).to(_Controller2["default"]);
container.bind(_TYPES["default"].SessionServiceableDomain).to(_Controller3["default"]);
container.bind(_TYPES["default"].CompanyServiceableDomain).to(_Controller4["default"]);
container.bind(_TYPES["default"].BankServiceableDomain).to(_Controller5["default"]);
container.bind(_TYPES["default"].CategoryServiceableDomain).to(_Controller6["default"]);
container.bind(_TYPES["default"].TransactionServiceableDomain).to(_Controller7["default"]);
container.bind(_TYPES["default"].SubcategoryServiceableDomain).to(_Controller8["default"]);
container.bind(_TYPES["default"].MessageServiceableDomain).to(_Controller9["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller10["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller11["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller12["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller13["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller14["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller15["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller16["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller17["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller18["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model9["default"]()).whenTargetNamed(_TYPES["default"].Post);
container.bind(_TYPES["default"].Validable).to(_Dto10["default"]).whenTargetNamed(_TYPES["default"].Post);
container.bind(_TYPES["default"].PostInterface).toConstantValue(new _Dto10["default"]());
container.bind(_TYPES["default"].PostServiceableDomain).to(_Controller19["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller20["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model10["default"]()).whenTargetNamed(_TYPES["default"].Proposal);
container.bind(_TYPES["default"].Validable).to(_Dto11["default"]).whenTargetNamed(_TYPES["default"].Proposal);
container.bind(_TYPES["default"].ProposalInterface).toConstantValue(new _Dto11["default"]());
container.bind(_TYPES["default"].ProposalServiceableDomain).to(_Controller21["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller22["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model11["default"]()).whenTargetNamed(_TYPES["default"].ProposalState);
container.bind(_TYPES["default"].Validable).to(_Dto12["default"]).whenTargetNamed(_TYPES["default"].ProposalState);
container.bind(_TYPES["default"].ProposalStateInterface).toConstantValue(new _Dto12["default"]());
container.bind(_TYPES["default"].ProposalStateServiceableDomain).to(_Controller23["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller24["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model12["default"]()).whenTargetNamed(_TYPES["default"].Permission);
container.bind(_TYPES["default"].Validable).to(_Dto13["default"]).whenTargetNamed(_TYPES["default"].Permission);
container.bind(_TYPES["default"].PermissionInterface).toConstantValue(new _Dto13["default"]());
container.bind(_TYPES["default"].PermissionServiceableDomain).to(_Controller25["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller26["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model13["default"]()).whenTargetNamed(_TYPES["default"].Rol);
container.bind(_TYPES["default"].Validable).to(_Dto14["default"]).whenTargetNamed(_TYPES["default"].Rol);
container.bind(_TYPES["default"].RolInterface).toConstantValue(new _Dto14["default"]());
container.bind(_TYPES["default"].RolServiceableDomain).to(_Controller27["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller28["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model14["default"]()).whenTargetNamed(_TYPES["default"].Mail);
container.bind(_TYPES["default"].Validable).to(_Dto15["default"]).whenTargetNamed(_TYPES["default"].Mail);
container.bind(_TYPES["default"].MailInterface).toConstantValue(new _Dto15["default"]());
container.bind(_TYPES["default"].MailServiceableDomain).to(_Controller29["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller30["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model15["default"]()).whenTargetNamed(_TYPES["default"].Payment);
container.bind(_TYPES["default"].Validable).to(_Dto16["default"]).whenTargetNamed(_TYPES["default"].Payment);
container.bind(_TYPES["default"].PaymentInterface).toConstantValue(new _Dto16["default"]());
container.bind(_TYPES["default"].PaymentServiceableDomain).to(_Controller31["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller32["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model16["default"]()).whenTargetNamed(_TYPES["default"].Subscription);
container.bind(_TYPES["default"].Validable).to(_Dto17["default"]).whenTargetNamed(_TYPES["default"].Subscription);
container.bind(_TYPES["default"].SubscriptionInterface).toConstantValue(new _Dto17["default"]());
container.bind(_TYPES["default"].SubscriptionServiceableDomain).to(_Controller33["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller34["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model17["default"]()).whenTargetNamed(_TYPES["default"].Course);
container.bind(_TYPES["default"].Validable).to(_Dto18["default"]).whenTargetNamed(_TYPES["default"].Course);
container.bind(_TYPES["default"].CourseInterface).toConstantValue(new _Dto18["default"]());
container.bind(_TYPES["default"].CourseServiceableDomain).to(_Controller35["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller36["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model18["default"]()).whenTargetNamed(_TYPES["default"].Student);
container.bind(_TYPES["default"].Validable).to(_Dto19["default"]).whenTargetNamed(_TYPES["default"].Student);
container.bind(_TYPES["default"].StudentInterface).toConstantValue(new _Dto19["default"]());
container.bind(_TYPES["default"].StudentServiceableDomain).to(_Controller37["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller38["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model19["default"]()).whenTargetNamed(_TYPES["default"].Link);
container.bind(_TYPES["default"].Validable).to(_Dto20["default"]).whenTargetNamed(_TYPES["default"].Link);
container.bind(_TYPES["default"].LinkInterface).toConstantValue(new _Dto20["default"]());
container.bind(_TYPES["default"].LinkServiceableDomain).to(_Controller39["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller40["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model20["default"]()).whenTargetNamed(_TYPES["default"].File);
container.bind(_TYPES["default"].Validable).to(_Dto21["default"]).whenTargetNamed(_TYPES["default"].File);
container.bind(_TYPES["default"].FileInterface).toConstantValue(new _Dto21["default"]());
container.bind(_TYPES["default"].FileServiceableDomain).to(_Controller41["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller42["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model21["default"]()).whenTargetNamed(_TYPES["default"].Exam);
container.bind(_TYPES["default"].Validable).to(_Dto22["default"]).whenTargetNamed(_TYPES["default"].Exam);
container.bind(_TYPES["default"].ExamInterface).toConstantValue(new _Dto22["default"]());
container.bind(_TYPES["default"].ExamServiceableDomain).to(_Controller43["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller44["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model22["default"]()).whenTargetNamed(_TYPES["default"].Question);
container.bind(_TYPES["default"].Validable).to(_Dto23["default"]).whenTargetNamed(_TYPES["default"].Question);
container.bind(_TYPES["default"].QuestionInterface).toConstantValue(new _Dto23["default"]());
container.bind(_TYPES["default"].QuestionServiceableDomain).to(_Controller45["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller46["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model23["default"]()).whenTargetNamed(_TYPES["default"].QuestionType);
container.bind(_TYPES["default"].Validable).to(_Dto24["default"]).whenTargetNamed(_TYPES["default"].QuestionType);
container.bind(_TYPES["default"].QuestionTypeInterface).toConstantValue(new _Dto24["default"]());
container.bind(_TYPES["default"].QuestionTypeServiceableDomain).to(_Controller47["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller48["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model24["default"]()).whenTargetNamed(_TYPES["default"].Quiz);
container.bind(_TYPES["default"].Validable).to(_Dto25["default"]).whenTargetNamed(_TYPES["default"].Quiz);
container.bind(_TYPES["default"].QuizInterface).toConstantValue(new _Dto25["default"]());
container.bind(_TYPES["default"].QuizServiceableDomain).to(_Controller49["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller50["default"]);
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model25["default"]()).whenTargetNamed(_TYPES["default"].QuestionQuiz);
container.bind(_TYPES["default"].Validable).to(_Dto26["default"]).whenTargetNamed(_TYPES["default"].QuestionQuiz);
container.bind(_TYPES["default"].QuestionQuizInterface).toConstantValue(new _Dto26["default"]());
container.bind(_TYPES["default"].QuestionQuizServiceableDomain).to(_Controller51["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller52["default"]);

var containerReturn = _inversify.Container.merge(container, _inversify2["default"]);

containerReturn = _inversify.Container.merge(containerReturn, _inversify3["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify4["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify5["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify6["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify7["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify8["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify9["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify10["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify11["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify12["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify13["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify14["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify15["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify16["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify17["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify18["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify19["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify20["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify21["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify22["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify23["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify24["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify25["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify26["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify27["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify28["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify29["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify30["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify31["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify32["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify33["default"]);
containerReturn = _inversify.Container.merge(containerReturn, _inversify34["default"]); // push

var _default = containerReturn;
exports["default"] = _default;