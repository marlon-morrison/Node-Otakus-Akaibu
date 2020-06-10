const daoClass = require("../../dao/AcharacterDao");
const dao = new daoClass();

const express = require("express");
const router = express.Router();

// ALL AcharacterS ROUTE -> /api/Acharacters"/"
router.get("/", (req,res) => {
    dao.findAll(req,res);
});

// ALL colors ROUTE -> /api/Acharacters"/"
router.get("/colors", (req,res) => {
    dao.findAllColors(req,res);
});

// ALL animes ROUTE -> /api/Acharacters"/"
router.get("/animes", (req,res) => {
    dao.findAllAnimes(req,res);
});

// ALL fanart ROUTE -> /api/Acharacters"/"
router.get("/fanart", (req,res) => {
    dao.findAllFanart(req,res);
});

// FIND BY TOP FANART ROUTE -> /api/Acharacters/
router.get("/top/fanart", (req,res) => {
    dao.topFanart(req,res)
});

// FIND BY TOP CHARAcTER ROUTE -> /api/Acharacters/
router.get("/top/Acharacter", (req,res) => {
    dao.topACharacter(req,res)
});

// FIND BY ID ROUTE -> /api/Acharacters/:id
router.get("/:id", (req,res) => {
    dao.findById(req,res,req.params.id);
});

// FIND BY ANIME ROUTE -> /api/Acharacters/
router.get("/anime/:anime", (req,res) => {
    dao.findByAnime(req,res,req.params.anime)
});

// ----------------------- comment section-----------------------//

router.get("/comments/all", (req,res) => {
    dao.findAllComment(req,res);
});

// FIND BY ID ROUTE -> /api/chararters"/" 
router.get("/comments/:id", (req,res) => {
    dao.findByIdComment(req,res,req.params.id);
});

router.post("/comments/create/:comment", (req, res) => {
    dao.createComment(req,res,req.params.comment)
});

// -----------------------fanart filter section-----------------------//

// ALL fanart ROUTE -> /api/Acharacters"/"
router.get("/fanart/rank", (req,res) => {
    dao.filterByRank(req,res);
});

// ALL fanart ROUTE -> /api/Acharacters"/"
router.get("/fanart/Acharacter/:id", (req,res) => {
    dao.filterByACharacter(req,res,req.params.id);
});

// ALL fanart ROUTE -> /api/Acharacters"/"
router.get("/fanart/anime/:anime", (req,res) => {
    dao.filterByAnimeF(req,res,req.params.anime);
});

// -----------------------character filter section-----------------------//

// FILTER BY ANIME ROUTE -> /api/Acharacters"/"
router.get("/filter/anime/:anime", (req,res) => {
    dao.filterByAnime(req,res,req.params.anime)
});

// FILTER BY EYES ROUTE -> /api/Acharacters"/"
router.get("/filter/eye-color/:eyec", (req,res) => {
    dao.filterByEyeC(req,res,req.params.eyec)
});

// FILTER BY HAIR ROUTE -> /api/Acharacters"/"
router.get("/filter/hair-color/:hairc", (req,res) => {
    dao.filterByHairC(req,res,req.params.hairc)
});

// FILTER BY ROLE ROUTE -> /api/Acharacters"/"
router.get("/filter/role/:role", (req,res) => {
    dao.filterByRole(req,res,req.params.role)
});

// FILTER BY GENDER ROUTE -> /api/Acharacters"/"
router.get("/filter/gender/:gender", (req,res) => {
    dao.filterByGender(req,res,req.params.gender)
});

// FILTER BY ALL ROUTE -> /api/Acharacters"/"
router.get("/filter/all/:anime/:eyec/:hairc/:role/:gender", (req,res) => {
    dao.filterByAll(req,res,req.params.anime,req.params.eyec,req.params.hairc,req.params.role,req.params.gender)
});

// ----------------------- page section-----------------------//

// FILTER BY ALL ROUTE -> /api/Acharacters"/"
router.get("/page/:page", (req,res) => {
    dao.AcharacterPages(req,res,req.params.page)
});

// FILTER BY ALL ROUTE -> /api/Acharacters"/"
router.get("/fanart/page/:page", (req,res) => {
    dao.fanartPages(req,res,req.params.page)
});

router.post("/create", (req, res) => {
    console.log(req.body);
    dao.create(req,res)
});

module.exports = router;