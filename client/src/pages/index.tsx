import styles from './index.less';
type Props = {
  children: JSX.Element;
};
export default function IndexPage({ children }: Props) {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {children}
    </div>
  );
}
