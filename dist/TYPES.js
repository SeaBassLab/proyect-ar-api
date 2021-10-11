"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = _interopRequireDefault(require("./Presentation/Controllers/Magnitude/types"));

var _types2 = _interopRequireDefault(require("./Presentation/Controllers/Instrument/types"));

var _types3 = _interopRequireDefault(require("./Presentation/Controllers/Business/types"));

var _types4 = _interopRequireDefault(require("./Presentation/Controllers/Certificate/types"));

var _types5 = _interopRequireDefault(require("./Presentation/Controllers/Calibration/types"));

var _types6 = _interopRequireDefault(require("./Presentation/Controllers/Area/types"));

var _types7 = _interopRequireDefault(require("./Presentation/Controllers/Unit/types"));

var _types8 = _interopRequireDefault(require("./Presentation/Controllers/Alert/types"));

var _types9 = _interopRequireDefault(require("./Presentation/Controllers/Configuration/types"));

var _types10 = _interopRequireDefault(require("./Presentation/Controllers/Blue/types"));

var _types11 = _interopRequireDefault(require("./Presentation/Controllers/Usdt/types"));

var _types12 = _interopRequireDefault(require("./Presentation/Controllers/Wire/types"));

var _types13 = _interopRequireDefault(require("./Presentation/Controllers/Investment/types"));

var _types14 = _interopRequireDefault(require("./Presentation/Controllers/Transfer/types"));

var _types15 = _interopRequireDefault(require("./Presentation/Controllers/Check/types"));

var _types16 = _interopRequireDefault(require("./Presentation/Controllers/Account/types"));

var _types17 = _interopRequireDefault(require("./Presentation/Controllers/Movement/types"));

var _types18 = _interopRequireDefault(require("./Presentation/Controllers/Interest/types"));

var _types19 = _interopRequireDefault(require("./Presentation/Controllers/Loan/types"));

var _types20 = _interopRequireDefault(require("./Presentation/Controllers/Box/types"));

var _types21 = _interopRequireDefault(require("./Presentation/Controllers/Item/types"));

var _types22 = _interopRequireDefault(require("./Presentation/Controllers/Purchase/types"));

var _types23 = _interopRequireDefault(require("./Presentation/Controllers/Sale/types"));

var _types24 = _interopRequireDefault(require("./Presentation/Controllers/Plan/types"));

var _types25 = _interopRequireDefault(require("./Presentation/Controllers/Shipping/types"));

var _types26 = _interopRequireDefault(require("./Presentation/Controllers/Code/types"));

var _types27 = _interopRequireDefault(require("./Presentation/Controllers/Strain/types"));

var _types28 = _interopRequireDefault(require("./Presentation/Controllers/Type/types"));

var _types29 = _interopRequireDefault(require("./Presentation/Controllers/Store/types"));

var _types30 = _interopRequireDefault(require("./Presentation/Controllers/Information/types"));

var _types31 = _interopRequireDefault(require("./Presentation/Controllers/Tag/types"));

var _types32 = _interopRequireDefault(require("./Presentation/Controllers/Section/types"));

var _types33 = _interopRequireDefault(require("./Presentation/Controllers/Entity/types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var returnEntities = {};

function jsonConcat(o1, o2) {
  for (var key in o2) {
    o1[key] = o2[key];
  }

  ;
  return o1;
}

returnEntities = jsonConcat(returnEntities, _types["default"]);
returnEntities = jsonConcat(returnEntities, _types2["default"]);
returnEntities = jsonConcat(returnEntities, _types3["default"]);
returnEntities = jsonConcat(returnEntities, _types4["default"]);
returnEntities = jsonConcat(returnEntities, _types5["default"]);
returnEntities = jsonConcat(returnEntities, _types6["default"]);
returnEntities = jsonConcat(returnEntities, _types7["default"]);
returnEntities = jsonConcat(returnEntities, _types8["default"]);
returnEntities = jsonConcat(returnEntities, _types9["default"]);
returnEntities = jsonConcat(returnEntities, _types10["default"]);
returnEntities = jsonConcat(returnEntities, _types11["default"]);
returnEntities = jsonConcat(returnEntities, _types12["default"]);
returnEntities = jsonConcat(returnEntities, _types13["default"]);
returnEntities = jsonConcat(returnEntities, _types14["default"]);
returnEntities = jsonConcat(returnEntities, _types15["default"]);
returnEntities = jsonConcat(returnEntities, _types16["default"]);
returnEntities = jsonConcat(returnEntities, _types17["default"]);
returnEntities = jsonConcat(returnEntities, _types18["default"]);
returnEntities = jsonConcat(returnEntities, _types19["default"]);
returnEntities = jsonConcat(returnEntities, _types20["default"]);
returnEntities = jsonConcat(returnEntities, _types21["default"]);
returnEntities = jsonConcat(returnEntities, _types22["default"]);
returnEntities = jsonConcat(returnEntities, _types23["default"]);
returnEntities = jsonConcat(returnEntities, _types24["default"]);
returnEntities = jsonConcat(returnEntities, _types25["default"]);
returnEntities = jsonConcat(returnEntities, _types26["default"]);
returnEntities = jsonConcat(returnEntities, _types27["default"]);
returnEntities = jsonConcat(returnEntities, _types28["default"]);
returnEntities = jsonConcat(returnEntities, _types29["default"]);
returnEntities = jsonConcat(returnEntities, _types30["default"]);
returnEntities = jsonConcat(returnEntities, _types31["default"]);
returnEntities = jsonConcat(returnEntities, _types32["default"]);
returnEntities = jsonConcat(returnEntities, _types33["default"]);
var TYPES = {
  SendeableMail: Symbol["for"]('SendeableMail'),
  Routeable: Symbol["for"]('Routeable'),
  Responseable: Symbol["for"]('Responseable'),
  Appeable: Symbol["for"]('Appeable'),
  Schemable: Symbol["for"]('Schemable'),
  ConnectionableProvider: Symbol["for"]('ConnectionableProvider'),
  GeteableModel: Symbol["for"]('GeteableModel'),
  Authenticateable: Symbol["for"]('Authenticateable'),
  Validateable: Symbol["for"]('Validateable'),
  Router: Symbol["for"]('Router'),
  Validable: Symbol["for"]('Validable'),
  ResponseableDomain: Symbol["for"]('ResponseableDomain'),
  Authenticable: Symbol["for"]('Authenticable'),
  CreateableToken: Symbol["for"]('CreateableToken'),
  Modelable: Symbol["for"]('Modelable'),
  Controlleable: Symbol["for"]('Controlleable'),
  Updateable: Symbol["for"]('Updateable'),
  GeteableById: Symbol["for"]('GeteableById'),
  Saveable: Symbol["for"]('Saveable'),
  GeteableAll: Symbol["for"]('GeteableAll'),
  Searcheable: Symbol["for"]('Searcheable'),
  GeteableCompanyStorage: Symbol["for"]('GeteableCompanyStorage'),
  Login: Symbol["for"]('Login'),
  User: Symbol["for"]('User'),
  Session: Symbol["for"]('Session'),
  Company: Symbol["for"]('Company'),
  Bank: Symbol["for"]('Bank'),
  Item: Symbol["for"]('Item'),
  Category: Symbol["for"]('Category'),
  Transaction: Symbol["for"]('Transaction'),
  Subcategory: Symbol["for"]('Subcategory'),
  Message: Symbol["for"]('Message'),
  UserInterface: Symbol["for"]('UserInterface'),
  SessionInterface: Symbol["for"]('SessionInterface'),
  CompanyInterface: Symbol["for"]('CompanyInterface'),
  BankInterface: Symbol["for"]('BankInterface'),
  ItemInterface: Symbol["for"]('ItemInterface'),
  CategoryInterface: Symbol["for"]('CategoryInterface'),
  TransactionInterface: Symbol["for"]('TransactionInterface'),
  SubcategoryInterface: Symbol["for"]('SubcategoryInterface'),
  MessageInterface: Symbol["for"]('MessageInterface'),
  SessionBuilderable: Symbol["for"]('SessionBuilderable'),
  UserServiceableDomain: Symbol["for"]('UserServiceableDomain'),
  SessionServiceableDomain: Symbol["for"]('SessionServiceableDomain'),
  CompanyServiceableDomain: Symbol["for"]('CompanyServiceableDomain'),
  BankServiceableDomain: Symbol["for"]('BankServiceableDomain'),
  ItemServiceableDomain: Symbol["for"]('ItemServiceableDomain'),
  CategoryServiceableDomain: Symbol["for"]('CategoryServiceableDomain'),
  TransactionServiceableDomain: Symbol["for"]('TransactionServiceableDomain'),
  SubcategoryServiceableDomain: Symbol["for"]('SubcategoryServiceableDomain'),
  MessageServiceableDomain: Symbol["for"]('MessageServiceableDomain'),
  Post: Symbol["for"]('Post'),
  PostInterface: Symbol["for"]('PostInterface'),
  PostServiceableDomain: Symbol["for"]('PostServiceableDomain'),
  Proposal: Symbol["for"]('Proposal'),
  ProposalInterface: Symbol["for"]('ProposalInterface'),
  ProposalServiceableDomain: Symbol["for"]('ProposalServiceableDomain'),
  ProposalState: Symbol["for"]('ProposalState'),
  ProposalStateInterface: Symbol["for"]('ProposalStateInterface'),
  ProposalStateServiceableDomain: Symbol["for"]('ProposalStateServiceableDomain'),
  Permission: Symbol["for"]('Permission'),
  PermissionInterface: Symbol["for"]('PermissionInterface'),
  PermissionServiceableDomain: Symbol["for"]('PermissionServiceableDomain'),
  Rol: Symbol["for"]('Rol'),
  RolInterface: Symbol["for"]('RolInterface'),
  RolServiceableDomain: Symbol["for"]('RolServiceableDomain'),
  Mail: Symbol["for"]('Mail'),
  MailInterface: Symbol["for"]('MailInterface'),
  MailServiceableDomain: Symbol["for"]('MailServiceableDomain'),
  Payment: Symbol["for"]('Payment'),
  PaymentInterface: Symbol["for"]('PaymentInterface'),
  PaymentServiceableDomain: Symbol["for"]('PaymentServiceableDomain'),
  Subscription: Symbol["for"]('Subscription'),
  SubscriptionInterface: Symbol["for"]('SubscriptionInterface'),
  SubscriptionServiceableDomain: Symbol["for"]('SubscriptionServiceableDomain'),
  Hernan: Symbol["for"]('Hernan'),
  HernanInterface: Symbol["for"]('HernanInterface'),
  HernanServiceableDomain: Symbol["for"]('HernanServiceableDomain'),
  Course: Symbol["for"]('Course'),
  CourseInterface: Symbol["for"]('CourseInterface'),
  CourseServiceableDomain: Symbol["for"]('CourseServiceableDomain'),
  Student: Symbol["for"]('Student'),
  StudentInterface: Symbol["for"]('StudentInterface'),
  StudentServiceableDomain: Symbol["for"]('StudentServiceableDomain'),
  LinkInterface: Symbol["for"]('LinkInterface'),
  LinkServiceableDomain: Symbol["for"]('LinkServiceableDomain'),
  Link: Symbol["for"]('Link'),
  FileInterface: Symbol["for"]('FileInterface'),
  FileServiceableDomain: Symbol["for"]('FileServiceableDomain'),
  File: Symbol["for"]('File'),
  ExamInterface: Symbol["for"]('ExamInterface'),
  ExamServiceableDomain: Symbol["for"]('ExamServiceableDomain'),
  Exam: Symbol["for"]('Exam'),
  QuestionInterface: Symbol["for"]('QuestionInterface'),
  QuestionServiceableDomain: Symbol["for"]('QuestionServiceableDomain'),
  Question: Symbol["for"]('Question'),
  QuestionTypeInterface: Symbol["for"]('QuestionTypeInterface'),
  QuestionTypeServiceableDomain: Symbol["for"]('QuestionTypeServiceableDomain'),
  QuestionType: Symbol["for"]('QuestionType'),
  QuizInterface: Symbol["for"]('QuizInterface'),
  QuizServiceableDomain: Symbol["for"]('QuizServiceableDomain'),
  Quiz: Symbol["for"]('Quiz'),
  QuestionQuizInterface: Symbol["for"]('QuestionQuizInterface'),
  QuestionQuizServiceableDomain: Symbol["for"]('QuestionQuizServiceableDomain'),
  QuestionQuiz: Symbol["for"]('QuestionQuiz'),
  MagnitudeInterface: Symbol["for"]('MagnitudeInterface'),
  MagnitudeServiceableDomain: Symbol["for"]('MagnitudeServiceableDomain'),
  Magnitude: Symbol["for"]('Magnitude')
};
returnEntities = jsonConcat(returnEntities, TYPES);
var _default = returnEntities;
exports["default"] = _default;