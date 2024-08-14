import Link from "next/link";

export default function Page() {
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <Link href="./normal">Normal</Link>
          </th>
          <td>Immer不使用のフォーム</td>
        </tr>
        <tr>
          <th>
            <Link href="./immer-labeld">Immer Labeld</Link>
          </th>
          <td>Immer使用を使用したフォーム（ハンドラ処理個別）</td>
        </tr>
        <tr>
          <th>
            <Link href="./immer-numbering">Immer Numbering</Link>
          </th>
          <td>Immer使用を使用したフォーム（ハンドラ処理共通）</td>
        </tr>
      </tbody>
    </table>
  );
}
