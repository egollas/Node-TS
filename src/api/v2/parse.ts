import { Router, response } from 'express';

interface ResponseInformationType {
   firstName: String;
   lastName: String;
   clientId: String;
}
interface requestInformationType {
  data: string;
}
const parseRouter = Router();

parseRouter.post('/parse', (Request, Response) => {
  const userInfo : requestInformationType = Request.body
  const parseUserInfo :  ResponseInformationType = {
    firstName : '',
    lastName: '',
    clientId: ''
  }
  let { data } = userInfo
  parseUserInfo.firstName = data.split('0000')[0]
  data = data.split('0000')[1]
  parseUserInfo.lastName = data.split('000')[0]
  parseUserInfo.clientId = data.split('000')[1]
  return Response.json(parseUserInfo)
})

export default parseRouter;