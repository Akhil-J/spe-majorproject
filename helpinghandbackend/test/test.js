const app = require("../app");
const logger = require("../logger");
const request = require("supertest");
let token;
const baseUrl = "http://localhost:8000/api/signup";
// Signup;
describe("\n\n\n\nSignup ::", () => {
    it("Failed to signup \n\n", (done) => {
        request(baseUrl)
            .post("/")
            .send({
                name: "akhilj",
                email: "akhil@gmail.com",
                password: "a123456",
            })
            .end((err, res) => {
                if (res.body.name==="akhilj" ) {
                    console.log("success");
                    //logger.error(err);
                    //throw err;
                }
                console.log(res.body);
                if (res.body.name!=="akhilj") {
                    console.log("not valid");
                    logger.info(res.body);
                    token = res.body.token;
                }
                done();
            });
    });
});
// Login

describe("\n\n\n\nLogin test :: ", () => {
    it("should not be able log in \n\n", (done) => {
        request(baseUrl)
            .post("/signin")
            .send({
                email: "akhilll@gmail.com",
                password: "a123456",
            })
            .end((err, res) => {
                console.log(res.body);
                if (res.body.error == "User with that email does not exist. Please signup") {
                    logger.info(res.body.error);
                    console.log(res.body.error);
                    console.log("login failed");
                } else {
                    // console.log(res.body);
                    // logger.info(res.body);
                    console.log("logged in");
                }
                done();
            });
    });

    it("should be able to login \n\n", (done) => {
        request(baseUrl)
            .post("/signin")
            .send({
                email: "akhil@gmail.com",
                password: "a123456",
            })
            .end((err, res) => {
                // console.log(res.body);
                //console.log(res.body);
                if(res.body.name==="akhil") {
                    logger.info("User token :" + res.body.token);
                    console.log("login success");
                }
                else {
                    logger.info("login failed");
                    console.log("login failed");
                }
                //logger.info("User token :" + res.body.token);
                token = res.body.token;
                done();
            });
    });
});