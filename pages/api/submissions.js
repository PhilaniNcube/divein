import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER_PREFIX,
});

export default async function handler(req, res) {
  const {
    firstName,
    lastName,
    email,
    status,
    field,
    ageGroup,
    province,
  } = req.body;

  const subscribingUser = {
    firstName,
    lastName,
    email,
    status,
    field,
    ageGroup,
    province,
  };

  const tags = [
    subscribingUser.status,
    subscribingUser.field,
    subscribingUser.ageGroup,
    subscribingUser.province,
  ];

  console.log(tags);

  try {
    const response = await mailchimp.lists.addListMember(process.env.LIST_ID, {
      email_address: subscribingUser.email,
      occupation: subscribingUser.status,
      field_of_study: field,
      age_group: subscribingUser.ageGroup,
      location: {
        region: subscribingUser.province,
      },
      province: subscribingUser.province,
      status: 'subscribed',
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
      tags: tags,
    });

    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}
