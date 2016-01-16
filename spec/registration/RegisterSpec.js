describe("Register.js", function(){
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = "base/spec/registration/";
        loadFixtures('register.html');
        this.FormValidator = Register.validateForm();
    });

    it("should load the registration form", function(){
        expect("#register-form").toExist();
    });

    it("should validate required fields", function(){
        $("#register-form > #firstname").val("first");
        expect(this.FormValidator.element("#firstname")).toBeTruthy();
        $("#register-form > #lastname").val("");
        expect(this.FormValidator.element("#lastname")).toBeFalsy();
        expect($("#register-form")).toContainText("Please enter your last name");
        $("#register-form > #lastname").val("last");
        expect(this.FormValidator.element("#lastname")).toBeTruthy();
    });

});
