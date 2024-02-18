type Props = {
  title: string;
};

export const Title = (props: Props) => {
  return (
    <h2
      css={{
        fontSize: 17,
      }}
    >
      Title:{props.title}
    </h2>
  );
};
