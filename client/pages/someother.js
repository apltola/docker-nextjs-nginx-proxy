import Link from 'next/link';
import { body } from '../styles';

const Otherpage = () => {

  return <div>
    <div style={{paddingBottom: '20px'}}>
      this is some other page...
    </div>
    <Link href="/">go back home</Link>

    <style jsx global>{body}</style>
  </div>
}

export default Otherpage