class ApiResponse {
    constructor(statusCode, data, errors,message="Success") {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.success=statusCode<400
    }
}
export { ApiResponse }