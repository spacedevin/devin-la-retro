/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://www.figma.com/file/5Ov2RzdipyCZOvBjwRHsbI/Space-Resume-2023?type=design&node-id=0%3A1&mode=design&t=aMICpHn06pw9fTPa-1',
        permanent: false,
      },
    ]
  },
  fonts: {
    family: {
      sans: ['Times', 'Times New Roman'],
      serif: ['Times', 'Times New Roman'],
    },
  },
}
