#include<iostream>
#include <climits>
using namespace std;

int main (){

//     int arr[10]={12,2,1,12,212};

// // cout<<arr+3*4;
// int ans = INT_MAX;
// for(int i=0;i<5;i++){
//     if(arr[i]<ans){
//         ans=arr[i];
//     }
// }

// cout<<ans;

int n = 4;

int i = 1;
while (i <= n) {

    int j = 1;
    while (j <= (n-i)+1) {
        cout<<j;
        j++;
    }
    cout<<endl;
    i++;
}
    return 0; 
}