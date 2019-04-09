import Link from 'next/link';
import { body } from '../styles';

const Index = () => {

  return <div>
    <div style={{paddingBottom: '20px'}}>
      hello again next...
    </div>
    <Link href={{ pathname: "/someother", query:{} }} as="/otherpage">
      go to some other page
    </Link>

    <style jsx global>{body}</style>
  </div>
}

export default Index;