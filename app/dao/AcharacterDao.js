const pool = require("../config/dbconfig");

class ACharacterDao {
    constructor() {
        this.pool = pool
    };
    findAll(req,res) {
        let sql = "SELECT * from Acharacter"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    findAllColors(req,res) {
        let sql = "SELECT * from colors"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    findAllAnimes(req,res) {
        let sql = "SELECT * from animes"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    findAllFanart(req,res) {
        let sql = "SELECT * from fanarts"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    topFanart(req,res) {
        let sql = "SELECT * from fanarts order by rank limit 0, 3;"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    topACharacter(req,res) {
        let sql = "SELECT * from Acharacter order by rank limit 0, 3;"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    findById(req,res,id) {
        let sql = `SELECT * from Acharacter where id=?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    findByAnime(req,res,anime) {
        let sql = `SELECT c.fname,c.lname,c.age,c.dob, c.image,c.height,c.gender,c.race,c.role, a.anime, co.color as hair_color,col.color as eye_color from Acharacter c Join animes a On c.anime_id = a.id Join colors co On c.hair_color = co.id Join colors col On c.eye_color = col.id where c.id=?;`;
        this.pool.query(sql,[anime],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByAnime(req,res,anime) {
        let sql = "SELECT c. * from Acharacter c Join animes a On c.anime_id = a.id Join colors co On c.hair_color = co.id Join colors col On c.eye_color = col.id  where a.anime=?";
        this.pool.query(sql,[anime],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByHairC(req,res,hairc) {
        let sql = "SELECT c. * from Acharacter c Join animes a On c.anime_id = a.id Join colors co On c.hair_color = co.id Join colors col On c.eye_color = col.id  where c.hair_color=?";
        this.pool.query(sql,[hairc],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByEyeC(req,res,eyec) {
        let sql = "SELECT c. * from Acharacter c Join animes a On c.anime_id = a.id Join colors co On c.hair_color = co.id Join colors col On c.eye_color = col.id  where c.eye_color=?";
        this.pool.query(sql,[eyec],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByRole(req,res,role) {
        let sql = "SELECT c. * from Acharacter c Join animes a On c.anime_id = a.id Join colors co On c.hair_color = co.id Join colors col On c.eye_color = col.id  where c.role=?";
        this.pool.query(sql,[role],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByGender(req,res,gender) {
        let sql = "SELECT c. * from Acharacter c Join animes a On c.anime_id = a.id Join colors co On c.hair_color = co.id Join colors col On c.eye_color = col.id  where  c.gender=?" ;
        this.pool.query(sql,[gender],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByAll(req,res,anime,eyec,hairc,role,gender) {
        let sql = "SELECT c. * from Acharacter c Join animes a On c.anime_id = a.id Join colors co On c.hair_color = co.id Join colors col On c.eye_color = col.id  where a.anime=? And c.eye_color=? And c.hair_color=? And c.role=? And c.gender=?" ;
        this.pool.query(sql,[anime, eyec, hairc, role, gender],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByACharacter(req,res,id) {
        let sql = "SELECT f. * from fanarts f Join Acharacter c On f.pid = c.id where c.id=?;"
        this.pool.query(sql, [id], (error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByAnimeF(req,res,anime) {
        let sql = "SELECT f. * from fanarts f Join animes a On f.aid = a.id where a.anime=?;"
        this.pool.query(sql, [anime], (error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    filterByRank(req,res) {
        let sql = "SELECT * from fanarts order by rank;"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    AcharacterPages(req,res,page) {        
        let sql = `select * from Acharacter where page=?;`
        this.pool.query(sql,[page],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    fanartPages(req,res,page) {        
        let sql = `select * from fanarts where page=?;`
        this.pool.query(sql,[page],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    create(req,res) {
        if (!req.body.rank || !req.body.fname || !req.body.anime_id) {
            res.json({
                "error":true,
                "messeage": "Missing data"
            });
        };
        let fields = Object.keys(req.body);
        let VALUES = Object.values(req.body);

        let sql = `INSERT INTO Acharacter (${fields.join(",")}) VALUES (${Array(VALUES.length).fill("?").join(",")})`

        console.log(sql);
        
        this.pool.query(sql,VALUES,(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            };
            res.json(rows);
        })
    }
    
    findAllComment(req,res) {
        let sql = "SELECT * from comment"
        this.pool.query(sql, function (error,rows) {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };
    
    findByIdComment(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from comment where id=?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };
    
    createComment(req,res,comment) {
        let VALUES = Object.values(req.body);
    
        let sql = `INSERT INTO comment (response) VALUES ('${comment}')`
    
        console.log(sql);
        
        this.pool.query(sql,VALUES,(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            };
            res.json(rows);
        })
    }
}
module.exports = ACharacterDao;