describe("Register.js", function () {

    var entry = {
        firstname: ['first'],
        lastname: ['last'],
        email: ['first.last@example.com'],
        password: ['Pas$word!23']
    };

    function populateEntry() {
        $("#register-form > #firstname").val(entry.firstname[0]);
        $("#register-form > #lastname").val(entry.lastname[0]);
        $("#register-form > #email").val(entry.email[0]);
        $("#register-form > #password").val(entry.password[0]);
    }

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = "base/spec/registration/";
        loadFixtures('register.html');
        this.FormValidator = Register.validateForm();
        jasmine.Ajax.install();

    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it("should load the registration form", function () {
        expect("#register-form").toExist();
    });

    it("should validate required fields", function () {
        $("#register-form > #firstname").val(entry.firstname[0]);
        expect(this.FormValidator.element("#firstname")).toBeTruthy();
        $("#register-form > #lastname").val("");
        expect(this.FormValidator.element("#lastname")).toBeFalsy();
        expect($("#register-form")).toContainText("Please enter your last name");
        $("#register-form > #lastname").val(entry.lastname[0]);
        expect(this.FormValidator.element("#lastname")).toBeTruthy();
    });

    it("should post an entry correctly", function () {
        populateEntry();
        $("#register-form").submit();
        request = jasmine.Ajax.requests.mostRecent();
        expect(request.data()).toEqual(entry);
    });

    it("should process success correctly", function () {
        populateEntry();
        $("#register-form").submit();
        spyOn(window, 'alert');
        request = jasmine.Ajax.requests.mostRecent();
        var successMessage = "Registration successful";
        request.respondWith({
            status: 200,
            responseText: '{"message": "' + successMessage + '"}'
        });
        expect(request.data()).toEqual(entry);
        expect(window.alert).toHaveBeenCalledWith(successMessage);
    });

    it("should process errors correctly", function () {
        populateEntry();
        $("#register-form").submit();
        spyOn(window, 'alert');
        request = jasmine.Ajax.requests.mostRecent();
        var errorMessage = "An error occurred";
        request.respondWith({
            status: 404
        });
        expect(request.data()).toEqual(entry);
        expect(window.alert).toHaveBeenCalledWith(errorMessage);
    });

});
