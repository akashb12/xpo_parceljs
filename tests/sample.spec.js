const axios = require("axios");
const config = require("../config");
const token = `${config.userName}:${config.password}`;
const encodedToken = Buffer.from(token).toString("base64");
const baseUrl = config.baseUrl;
console.log(config.baseUrl);
// create message info
describe("Create Message info", () => {
  describe("given proper data", () => {
    test("should respond with a 200 status code", async () => {
      var addMessage = {
        method: "post",
        url: `${baseUrl}/message/info`,
        data: {
          messageName: "BIC_Test_16-09-2021 11.08",
          integrationName: "ACCS",
          createdBy: "ACCS Admin",
          masterMessageId: "1",
          flowType: "Inbound",
          messageType: "PIPE",
          customer: "BIC",
        },
        headers: { Authorization: "Basic " + encodedToken },
      };

      axios(addMessage)
        .then(function (response) {
          expect(response.statusCode).toBe(200);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  });
});
