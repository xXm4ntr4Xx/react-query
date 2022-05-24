# Getting Started with React Query

1.We install react query
<img width="142" alt="Screenshot 2022-05-24 at 15 26 07" src="https://user-images.githubusercontent.com/74420607/170059676-d6fcec5a-5d9a-4974-a840-f748b82ef1ec.png">
<hr>
2.import useQuery from react-query
<img width="243" alt="Screenshot 2022-05-24 at 15 27 18" src="https://user-images.githubusercontent.com/74420607/170059944-6bd6752c-e6bd-4177-8228-9bbfcdf1fffb.png">
<hr>
3.destructuring the data and status in the useQuery and pass two parameters(a unique key,the function that fetch and return  the data)

<img width="358" alt="Screenshot 2022-05-24 at 15 36 54" src="https://user-images.githubusercontent.com/74420607/170062134-a217da65-a286-4a19-a7f1-d2bfc8999397.png">

we can pass different elements(data,status,error,isFetching) as shown in the doc:
<img width="486" alt="Screenshot 2022-05-24 at 15 38 34" src="https://user-images.githubusercontent.com/74420607/170062522-0aa6a7e5-6c2e-4193-9913-64647c204839.png">
<hr>
4.we can use the status to show different info depending on the status of the request

<img width="281" alt="Screenshot 2022-05-24 at 15 45 17" src="https://user-images.githubusercontent.com/74420607/170064181-4df39c03-5cdf-48ca-a9bd-2ba896e736c7.png">

<hr>
5.remember to wrap your app into a queryClientProvider components
<img width="585" alt="Screenshot 2022-05-24 at 16 01 02" src="https://user-images.githubusercontent.com/74420607/170067851-94ac4706-73fa-4f80-a590-432dcaf801fc.png">
<hr>
6. This is how look the main components with the fetch data, and display the post title on screen

<img width="688" alt="Screenshot 2022-05-24 at 16 06 46" src="https://user-images.githubusercontent.com/74420607/170069138-bdee904c-5466-4a5c-8961-ee5716a1acaa.png">

<img width="1426" alt="Screenshot 2022-05-24 at 16 07 52" src="https://user-images.githubusercontent.com/74420607/170069403-fd879da8-b206-4c9b-8728-429f0999caa9.png">



