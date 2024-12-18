#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,m;
    cin>>n>>m;
    int arr1[n],arr2[m];
    for(int i=0;i<n;i++){
        cin>>arr1[i];
    }
    sort(arr1,arr1+n);
    for(int i=0;i<m;i++){
        cin>>arr2[i];
    }
    sort(arr2,arr2+m);
    int j=0,k=0;
    for(int i=0;i<n;i++){
        while(j<m){
            if(arr1[i]<=arr2[j]){
                k++;
                cout<<arr1[i]<<" "<<arr2[j]<<endl;
                 j++;
                break;
            }
            j++;
        }
    }
    cout<<k<<endl;

}