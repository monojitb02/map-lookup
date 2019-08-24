const OutletDAO = require('./outlet.dao');
class OutletController {
    nearest(req, res) {
        const { address } = req.query;
        if (!address) {
            return res.status(400).json({ success: false, message: 'address is required' });
        }
        OutletDAO.getByAddress(address).then(outlet => {
            res.json({ success: true, outlet });
        }).catch(e => {
            console.log(e);
            res.sendStatus(500);
        });
    }
}

module.exports = new OutletController();