export default [
    {
        "filterType": "aaa",
        "operator": "aaa",
        "value": "aaa"
    },
    {
        "operator": "OR",
        "left": {
            "filterType": "aaa",
            "operator": "aaa",
            "value": "aaa"
        },
        "right": {
            "operator": "OR",
            "left": {
                "filterType": "bbb",
                "operator": "bbb",
                "value": "bbb"
            },
            "right": {
                "filterType": "ccc",
                "operator": "ccc",
                "value": "ccc"
            }
        }
    },
    {
        "operator": "AND",
        "left": {
            "filterType": "aaa",
            "operator": "aaa",
            "value": "aaa"
        },
        "right": {
            "operator": "AND",
            "left": {
                "filterType": "ddd",
                "operator": "ddd",
                "value": "ddd"
            },
            "right": {
                "filterType": "ggg",
                "operator": "ggg",
                "value": "ggg"
            }
        }
    },
    {
        "operator": "AND",
        "left": {
            "operator": "OR",
            "left": {
                "filterType": "aaa",
                "operator": "aaa",
                "value": "aaa"
            },
            "right": {
                "operator": "OR",
                "left": {
                    "filterType": "bbb",
                    "operator": "bbb",
                    "value": "bbb"
                },
                "right": {
                    "filterType": "ccc",
                    "operator": "ccc",
                    "value": "ccc"
                }
            }
        },
        "right": {
            "operator": "AND",
            "left": {
                "operator": "OR",
                "left": {
                    "filterType": "ddd",
                    "operator": "ddd",
                    "value": "ddd"
                },
                "right": {
                    "operator": "OR",
                    "left": {
                        "filterType": "eee",
                        "operator": "eee",
                        "value": "eee"
                    },
                    "right": {
                        "filterType": "fff",
                        "operator": "fff",
                        "value": "fff"
                    }
                }
            },
            "right": {
                "operator": "OR",
                "left": {
                    "filterType": "ggg",
                    "operator": "ggg",
                    "value": "ggg"
                },
                "right": {
                    "operator": "OR",
                    "left": {
                        "filterType": "hhh",
                        "operator": "hhh",
                        "value": "hhh"
                    },
                    "right": {
                        "filterType": "iii",
                        "operator": "iii",
                        "value": "iii"
                    }
                }
            }
        }
    }
]