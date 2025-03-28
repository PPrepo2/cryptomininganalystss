const express = require("express");

const router = express.Router();

const { homePage, registerPage, loginPage, register_post, login_post, loginAdmin, logout_get, forexPage, indicesPage, cfdsPage, stockPage, cryptocurrenciesPage, metalsPage, futuresPage, energiesPage, commoditiesPage, bondsPage, whyPage, policyPage, termPage, warningPage, safetyPage, contactPage, newsPage, regulatePage, accountPage, conditionsPage, depo_widthPage, platformPage, whatPage, stratage, advanPage, cfdPage, glosarryPage, faqPage, accounttypesPage, sharePage, crossPage, calenderPage, chartsPage, marketPage } = require("../controllers/userController");
const { loginAdmin_post } = require("../controllers/adminController");

router.get("/", homePage);
router.get("/forex", forexPage);
router.get("/indices", indicesPage);
router.get("/cfds", cfdsPage);
router.get("/stock", stockPage);
router.get("/cryptocurrencies", cryptocurrenciesPage);
router.get("/metals", metalsPage);
router.get("/futures", futuresPage);
router.get("/energies", energiesPage);
router.get("/bonds", bondsPage);
router.get("/commodities", commoditiesPage);
router.get("/why-forex-boss", whyPage);
router.get("/privacy-policy", policyPage);
router.get("/terms-and-conditions", termPage);
router.get("/risk-warning", warningPage);
router.get("/safety-of-funds", safetyPage);
router.get("/contact-us", contactPage);
router.get("/company-news", newsPage);
router.get("/faqs", faqPage);
router.get("/licences-and-regulation", regulatePage);
router.get("/account-types", accounttypesPage);
router.get("/trading-conditions", conditionsPage);
router.get("/trading-platforms", platformPage);
router.get("/deposits-and-withdrawal", depo_widthPage);
router.get("/what-is-forex", whatPage);
router.get("/forex-trading-strategies", stratage);
router.get("/cfd-trading", cfdPage);
router.get("/advantages-of-trading-cfds", advanPage);
router.get("/cfd-glossary", glosarryPage);
router.get("/shares", sharePage);
router.get("/forex-cross-rates", crossPage);
router.get("/economic-calendar", calenderPage);
router.get("/trading-charts", chartsPage);
router.get("/market-analyst", marketPage);


router.get("/register", registerPage);
router.post('/register',register_post);

router.get("/login", loginPage);
router.post('/login',login_post);

router.get('/loginAdminse', loginAdmin);
router.post('/loginAdminse', loginAdmin_post)

router.get('/logout', logout_get)









module.exports = router;