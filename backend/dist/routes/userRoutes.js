"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Authmiddleware_1 = __importDefault(require("../middlewares/Authmiddleware"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.post('/signup', userController_1.registerUser);
router.post('/verify-otp', userController_1.verifyOtp);
router.post('/googlesignup', userController_1.googleregister);
router.post('/login', userController_1.login);
router.get('/fooditem', Authmiddleware_1.default, userController_1.getFoodItemsByCategory);
router.get('/restaurant/:id', userController_1.getRestaurantById);
router.get('/fooditems', Authmiddleware_1.default, userController_1.getFoodItemsByRestaurant);
router.post('/update-profile', Authmiddleware_1.default, userController_1.updateProfile);
router.post('/addtocart', Authmiddleware_1.default, userController_1.addToCart);
router.get('/usercart', Authmiddleware_1.default, userController_1.getCartItemsByUserId);
router.get('/fooditemid', Authmiddleware_1.default, userController_1.getFoodItemById);
router.delete('/clearCart', Authmiddleware_1.default, userController_1.clearCart);
router.delete('/removeItem', Authmiddleware_1.default, userController_1.removeCartItem);
router.post('/updatecartitem', Authmiddleware_1.default, userController_1.updateCartItem);
router.get('/addresses/:id', userController_1.getAddresses);
router.post('/address', Authmiddleware_1.default, userController_1.addAddress);
router.post('/createOrder', Authmiddleware_1.default, userController_1.createOrder);
router.get('/orders/:paymentId', Authmiddleware_1.default, userController_1.getOrderDetailss);
router.post('/saveOrder', Authmiddleware_1.default, userController_1.saveOrder);
router.get('/:name', Authmiddleware_1.default, userController_1.getFoodItemByIddd);
router.get('/orderss/:userId', Authmiddleware_1.default, userController_1.getOrdersByUserId);
router.get('/orderdetails/:orderId', Authmiddleware_1.default, userController_1.getOrderdetails);
router.get('/restaurantss', Authmiddleware_1.default, userController_1.getRestaurantss);
router.post('/conversations', userController_1.createConversation);
router.get('/:userId', userController_1.getConversationsByUser);
router.post('/messages', userController_1.sendMessage);
router.get('/messages/:conversationId', userController_1.getMessagesByConversation);
router.get('/getmessages', userController_1.getMessages);
router.post('/report/:id', userController_1.reportRestaurant);
exports.default = router;