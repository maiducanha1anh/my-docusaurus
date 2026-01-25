import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Giới Thiệu Bản Thân',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Mình là <b>Mai Đức Anh</b>, sinh viên CNTT, yêu thích lập trình ,
        Web và xây dựng sản phẩm thực tế.
      </>
    ),
  },
  {
    title: 'Blog Viết Về Gì ?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Chia sẻ kiến thức lập trình, ghi chép quá trình học tập
        và kinh nghiệm làm dự án.
      </>
    ),
  },
  {
    title: 'Mục Tiêu',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Xây dựng một blog cá nhân nghiêm túc để học sâu,
        chia sẻ và phát triển bản thân.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
