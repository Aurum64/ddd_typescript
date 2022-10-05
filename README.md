# 2022/10/5

## express の 立ち上げ
参考記事 : 
https://qiita.com/zaburo/items/69726cc42ef774990279

### よくやる設定
- package.json の "scripts" に "start": "npx ts-node index.ts" を追加

→ `npm run start` でサーバーが立ち上がる.


## response と request の型指定
仮引数のレスポンスの型指定にジェネリクスで型を入れることで、responseの型を指定できる。
```
res: express.Response<User>
```
request に関しては後に調査
