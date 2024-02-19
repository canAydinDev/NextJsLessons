



import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const config = {
  
  providers: [GitHub, Google, Credentials({
    credentials: {
      username: { label: "Username"},
      password: { label: "Password", type: "password"}
    },
    async authorize(credentials){ 
      //buraya code'lar gelecek
    }
  })],
  callbacks: {
    //bu callback mutlaka tanimlanmali
    //middleware icinde aktif hale getirilen route lara her giriste calisilir
    //eger bu callback true donerse route icine girilir yoksa sign in sayfasina gidilir
    authorized({request, auth}){
      
      return !!auth?.user
    }
    
  }
}

export const {handlers, auth} = NextAuth(config);