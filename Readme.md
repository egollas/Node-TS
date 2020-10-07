
## Install
 run command at root directory 'yarn install' or 'npm install'
## run app
 use command at root directory 'yarn dev' or 'npm run dev'
## check
### endpoints 
   - localhost:3000/api/v1/parse
   - localhost:3000/api/v2/parse
### requst body
 { data: 'Jhon0000Michael00099167' }
### response 
- v1/parse { firstName: 'Jhon0000', lastName: 'Michael000' clientId: '99167'}
- v2/parse { firstName: 'Jhon', lastName: 'Michael' clientId: '99167'}
