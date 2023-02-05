import { Text } from '@nextui-org/react'

type Props = {
  text: string
  description?: string
}

function MenuHeader({ text, description }: Props) {
  return (
    <>
      <Text
        h5
        transform="uppercase"
        weight={'extrabold'}
        css={{
          textAlign: 'center',
          letterSpacing: '0.2rem',
          fontFamily: '$primary',
          color: '$black',
          background: '$primaryGold',
          borderRadius: '$xl',
        }}
      >
        {text}
        <Text h6 style={{
          fontSize: '0.8rem',
          textAlign: 'center',
          fontFamily: '$primary',
        }}>{description}</Text>
      </Text>
    </>
  )
}

export default MenuHeader
