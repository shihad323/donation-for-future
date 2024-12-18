#include<bits/stdc++.h>
using namespace std;
int main(){
     string s;
     cin>>s;
     map<char,int>m;
     for(int i=0;i<s.size();i++){
        m[s[i]]++;
     }
     int n=0;
     char ch;
    for(auto a:m){
        if(a.second%2!=0){
            n++;
            ch=a.first;
        }
    }
    if(n>1||(n==1&&s.size()%2==0)){
        cout<<"not palindrome"<<endl;
        return 0;
    }
    string first="" , second = "";
    for(auto a:m){
        for(int i=0;i<a.second/2;i++){
            first=first+a.first;
            second=a.first+second;
        }
    }
    if(n==1){
        cout<<first+ch+second<<endl;
    }else{
        cout<<first+second<<endl;
    }

}