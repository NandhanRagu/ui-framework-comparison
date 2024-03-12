import Image from "next/image";
import styles from "./page.module.css";


async function getData() {
  const res = await fetch('https://api.slingacademy.com/v1/sample-data/products?limit=10000')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Home() {
  const data = await getData()
  return (
    <main className={styles.main}>
      <h1>Nexjs</h1>
        <table>
          <tr>
            <td>
              {
                data.products.map((data: any) => (
              <div key={data.id}>
                <Image src={data.photo_url} alt="."  width={500} height={500}/>
              </div>
            ))}
            </td>
            <td>
              {
                data.products.map((data: any) => (
              <div key={data.id}>
                <Image src={data.photo_url} alt="."  width={500} height={500}/>
              </div>
            ))}
            </td>
            <td>
              {
                data.products.map((data: any) => (
              <div key={data.id}>
                <Image src={data.photo_url} alt="."  width={500} height={500}/>
              </div>
            ))}
            </td>
            <td>
              {
                data.products.map((data: any) => (
              <div key={data.id}>
                <Image src={data.photo_url} alt="."  width={500} height={500}/>
              </div>
            ))}
            </td>
            <td>
              {
                data.products.map((data: any) => (
              <div key={data.id}>
                <Image src={data.photo_url} alt="."  width={500} height={500}/>
              </div>
            ))}
            </td>
          </tr>
        </table>
        
    </main>
  );
}
