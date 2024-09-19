import ViewAccInput from "@/components/Account/ViewAccInput";
import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userAvatar from "@/icons/svgs/UserAvatar.svg";
import useDynamicForm from "@/hooks/useDynamicForm";
import { AuthUser } from "@/components/api/type";
import Image from "next/image";
import { Field } from "@/schemas/dynamicSchema";
import { CustomButton } from "@/components/clickable/CustomButton";
import { ExportIcon } from "@/icons/svgComp/ExportIcon";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "password",
    errorMessage: "Enter password",
    isRequired: true,
  },
];

const Enquiry = () => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <main>
      <div className="my-10">
        <ViewAccInput
          type="text"
          placeholder="Account number"
          buttonLabel="Checking.."
        />
      </div>
      <section className="bg-white rounded-[30px] px-5 py-5">
        <section className="flex justify-between items-center px-3 py-3 w-full">
          <div className="flex gap-5 ">
            <Avatar className="w-[80px] h-[80px] rounded-2xl">
              <AvatarImage src="" />
              <AvatarFallback className="rounded-2xl">
                <Image src={userAvatar} width={80} height={80} alt="user" />
              </AvatarFallback>
            </Avatar>
            <aside className="flex flex-col gap-1 text-black">
              <h4 className="text-sm font-semibold">
                Ismail Abubakar Muhammed
              </h4>
              <p className="text-[11px] font-normal">ismailabu@gmail.com</p>
              <p className="text-[11px] font-normal">
                43, Abubakar Cresent, Maitama, FCT
              </p>
              <p className="text-[11px] font-normal">09123456789</p>
            </aside>
          </div>
          <div className="flex items-center w-1/2 gap-6 ">
            <CustomDatePicker
              name="startDate"
              control={control}
              label="Start Date"
              rules={{ required: true }}
              variant="basic"
            />
            <CustomDatePicker
              name="endDate "
              control={control}
              label="End Date "
              rules={{ required: true }}
              variant="basic"
            />
          </div>
        </section>
        <section className="flex items-center justify-between gap-7 my-1">
          <CustomButton
            variant="primary"
            label="Spool Entries"
            className="rounded-[60px] w-[70%] text-base h-[60px] font-[300]"
          />

          <CustomButton
            variant="primary"
            className="rounded-[60px] bg-transparent border border-[#D4D7E5] text-[#565973] w-[30%] text-base h-[60px] font-[300]"
            icon={ExportIcon}
          >
            Export to pdf
          </CustomButton>
        </section>
        <SkeletonTableLoader />
      </section>
    </main>
  );
};

export default Enquiry;
