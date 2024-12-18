import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})




const organization={
  name:"tech corp",
  departments:{
    engineering:{
      head:{
        name:"Alice"
      }
    }
  }
};

const{departments:{engineering:{head:{name:na}}}}=organization;
console.log(na);
