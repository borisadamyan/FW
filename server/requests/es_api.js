// const {getLastMin} = require('../service/elastic');
// const cache = require('memory-cache');
// const es_api = (app) => {
//
//     app.get('', async (request, res) => {
//         const req = JSON.parse(request.query.esQuery);
//         try {
//             const result = await getLastMin(req.size, req.from, req.until, req.data_size, req.index);
//             const sendResult = {result};
//             res.status(200).json({
//                 message: 'Last min Data is ready!!!',
//                 obj: sendResult
//             })
//         } catch (err) {
//             res.status(500).json({
//                 message: 'error for data /get_last_min',
//                 obj: err
//             });
//         }
//     });
//
// };
//
// module.exports = es_api;