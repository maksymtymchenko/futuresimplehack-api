class AppController {
    async index(req, res) {
        res.status(200).json("Hello, it's Future Simple Hack API")
    }

    async ping(req, res) {
        res.status(200).json("Pong")
    }
}

export default new AppController();