# API Documents

## Products

---

### Products-List

[Postman](todo)

Request

GET
```{{APIUrl}}/products?brand=Artfloor&series=Urban&sortBy=price&order=desc&page=1&pageSize=24```

|Parameters|Description|
|--|--|
|brand|品牌名，目前有Artfloor,Arteo兩種|
|series|系列，目前有Artfloor,Arteo兩種|

Response

|Parameters|Description|
|--|--|
|Id|GUID|
|createdTime|UTC +8|

```json
{
    "page": 1,
    "pageSize": 10,
    "totalItems": 5,
    "totalPages": 1,
    "sortBy": "price",
    "order": "desc",
    "products":
    [
        {
            "id": 12371984865,
            "brand": "Artfloor",
            "series": "Urban",
            "name": "奶油色橡木",
            "price": 7200.00,
            "image": "https://your-s3-bucket.s3.amazonaws.com/images/product1.jpg?AWSAccessKeyId=AKIAIOSFODNN7...&Expires=1600000000&Signature=abcdefghij...",
            "createdTime": "2023-04-05T10:00:00Z"
        },
        {
            "id": 43725071348,
            "brand": "Arteo",
            "series": "normal",
            "name": "棕色橡木",
            "price": 2000.00,
            "image": "https://your-s3-bucket.s3.amazonaws.com/images/product1.jpg?AWSAccessKeyId=AKIAIOSFODNN7...&Expires=1600000000&Signature=abcdefghij...",
            "createdTime": "2023-04-05T10:00:00Z",
        }
    ]
}
```

---

### Product-Detail

[Postman](todo)

Request

GET
```{{APIUrl}}/products/1248147```

Response

```json
{
            "id": 43725071348,
            "brand": "Arteo",
            "series": "normal",
            "name": "棕色橡木",
            "price": 2000.00,
            "image": "https://your-s3-bucket.s3.amazonaws.com/images/product1.jpg?AWSAccessKeyId=AKIAIOSFODNN7...&Expires=1600000000&Signature=abcdefghij...",
            "createdTime": "2023-04-05T10:00:00Z",
            "detail":"一款来自 Artfloor Prime 系列的高品質橡木地板"
}

```

---

## Brands

[Postman](todo)

Request

### Brands-List

```{{APIUrl}}/brands```

Response

```json
{
  "brands": [
    {
      "name": "Artfloor",
      "series": ["Urban", "Prime"]
    },
    {
      "name": "Arteo",
      "series": ["人字拼", "一般"]
    }
  ]
}

```
