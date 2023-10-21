## 目前結構
```
index|
        APP|(我在這放了一個陣列資料)
             Home|
                    Post|
                            Item|

            About|   
```
## To do && 筆記
```
一路從APP傳遞到Home到Post到Item
    有機會希望可以使用Redux
```

### 知識點1
```
發現原來可以除了在Layout的地方使用Link
我引入Link 使用map 去跑陣列中的項目 有使用Link 就可以用to 

   {
    dataArray.map((item) => (
        <Link key={item.id}  to={`/post/${item.id}`}>
          <h2>{item.title}</h2>
        </Link>
      ))
    }
```

###  知識點2
```
useNavigate 可以製作返回上一頁的功能

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

讓button綁事件
<button onClick={goBack}>返回上一頁</button>
```


#### 參考影片
https://www.youtube.com/watch?v=gV07Tqi0i_o&ab_channel=WeiWei