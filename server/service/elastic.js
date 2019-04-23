// const {GetGlobalData} = require('../utils/ES_data_indexes/globalData');
//
// const getLastMin = async (size, from, until, data_size, index) => {
//     try {
//         const result = await GetGlobalData(index).search({
//             body: {
//                 size: size,
//                 query: {
//                     bool: {
//                         must: [
//                             {
//                                 'range': {
//                                     '@timestamp': {
//                                         'gte': `${from}`,
//                                         'lt': `${until}`
//                                     }
//                                 },
//                             }
//                         ]
//                     }
//                 },
//                 "aggregations": {
//                     "platforms": {
//                         "terms": {
//                             "field": "platform",
//                         },
//                         "aggs": {
//                             "doc_count": {
//                                 "sum": {
//                                     "field": "doc_count",
//                                 }
//                             },
//                         }
//                     },
//                     "status": {
//                         "terms": {
//                             "field": "status",
//                         },
//                         "aggs": {
//                             "doc_count": {
//                                 "sum": {
//                                     "field": "doc_count",
//                                 }
//                             },
//                         }
//                     },
//                     "cache_status": {
//                         "terms": {
//                             "field": "cache_status",
//                         },
//                         "aggs": {
//                             "doc_count": {
//                                 "sum": {
//                                     "field": "doc_count",
//                                 }
//                             },
//                         }
//                     },
//                     "data_over_time": {
//                         "date_histogram": {
//                             "field": "@timestamp",
//                             "interval": `${size}m`,
//                         },
//                         "aggs": {
//                             "doc_count_STAT": {
//                                 "sum": {
//                                     "field": "doc_count",
//                                 }
//                             },
//                         }
//                     },
//                     "doc_count_AVG": {
//                         "sum": {
//                             "field": "doc_count",
//                         }
//                     },
//                     "non_cache": {
//                         "filter": {"term": {"cache_status": "non_cache"}},
//                         "aggregations": {
//                             "uri": {
//                                 "terms": {
//                                     "field": "uri",
//                                     "size": data_size,
//                                 },
//                                 "aggs": {
//                                     "status": {
//                                         "terms": {
//                                             "field": "status",
//                                         },
//                                         "aggs": {
//                                             "doc_count": {
//                                                 "sum": {
//                                                     "field": "doc_count",
//                                                 }
//                                             },
//                                         }
//                                     },
//                                 },
//
//                             },
//                             "data_over_time": {
//                                 "date_histogram": {
//                                     "field": "@timestamp",
//                                     "interval": `${size}m`,
//                                 },
//                                 "aggs": {
//                                     // "doc_count_STAT": {
//                                     //     "stats": {
//                                     //         "field": "doc_count",
//                                     //     }
//                                     // },
//                                     "avg_body_bytes_sent_STAT": {
//                                         "avg": {
//                                             "field": "avg_body_bytes_sent",
//                                         },
//                                     },
//                                     "max_body_bytes_sent_STAT": {
//                                         "avg": {
//                                             "field": "max_body_bytes_sent",
//                                         },
//                                     },
//                                     "min_body_bytes_sent_STAT": {
//                                         "avg": {
//                                             "field": "min_body_bytes_sent",
//                                         },
//                                     },
//                                     "avg_request_time_STAT": {
//                                         "avg": {
//                                             "field": "avg_request_time",
//                                         }
//                                     },
//                                     "avg_upstream_response_time_STAT": {
//                                         "avg": {
//                                             "field": "avg_upstream_response_time",
//                                         }
//                                     },
//                                     "max_request_time_STAT": {
//                                         "avg": {
//                                             "field": "max_request_time",
//                                         }
//                                     },
//                                     "max_upstream_response_time_STAT": {
//                                         "avg": {
//                                             "field": "max_upstream_response_time",
//                                         }
//                                     },
//                                     "min_request_time_STAT": {
//                                         "avg": {
//                                             "field": "min_request_time",
//                                         }
//                                     },
//                                     "min_upstream_response_time_STAT": {
//                                         "avg": {
//                                             "field": "min_upstream_response_time",
//                                         }
//                                     },
//                                 }
//                             },
//                             "doc_count_AVG": {
//                                 "sum": {
//                                     "field": "doc_count",
//                                 }
//                             },
//                             "avg_body_bytes_sent_AVG": {
//                                 "avg": {
//                                     "field": "avg_body_bytes_sent",
//                                 }
//                             },
//                             "avg_request_time_AVG": {
//                                 "avg": {
//                                     "field": "avg_request_time",
//                                 }
//                             },
//                             "avg_upstream_response_time_AVG": {
//                                 "avg": {
//                                     "field": "avg_upstream_response_time",
//                                 }
//                             },
//                             "max_body_bytes_sent_AVG": {
//                                 "avg": {
//                                     "field": "max_body_bytes_sent",
//                                 }
//                             },
//                             "max_request_time_AVG": {
//                                 "avg": {
//                                     "field": "max_request_time",
//                                 }
//                             },
//                             "max_upstream_response_time_AVG": {
//                                 "avg": {
//                                     "field": "max_upstream_response_time",
//                                 },
//                             },
//                             "min_body_bytes_sent_AVG": {
//                                 "avg": {
//                                     "field": "min_body_bytes_sent",
//                                 }
//                             },
//                             "min_request_time_AVG": {
//                                 "avg": {
//                                     "field": "min_request_time",
//                                 }
//                             },
//                             "min_upstream_response_time_AVG": {
//                                 "avg": {
//                                     "field": "min_upstream_response_time",
//                                 }
//                             },
//                         }
//                     },
//                 },
//             }
//         });
//         return result
//     } catch (err) {
//         console.log(err.message);
//     }
// };
//
// module.exports = {getLastMin};