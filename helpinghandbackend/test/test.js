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
