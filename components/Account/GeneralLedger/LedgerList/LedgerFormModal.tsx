"use client";
import React, { useEffect, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { ListForm } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { RegionDataItem, useRegions } from "@/components/api/crud/region";
import { BranchDataItem, useBranches } from "@/components/api/crud/branch";
import {
  ClassListItem,
  LedgerList,
  useLedgerList,
} from "@/components/api/crud/ledgerList";
import { toast } from "sonner";
import { useCurrencies } from "@/components/api/crud/currency";

const fields: Field[] = [
  {
    name: "acctName",
    type: "text",
    errorMessage: "Account Name is required",
    isRequired: true,
  },
  {
    name: "branchID",
    type: "text",
    errorMessage: "Branch is required",
    // isRequired: true,
  },
  {
    name: "regionID",
    type: "text",
    errorMessage: "Region is required",
    // isRequired: true,
  },
  {
    name: "ledgerClassID",
    type: "text",
    errorMessage: "Ledger is required",
    // isRequired: true,
  },
  {
    name: "ledgerSubClassID",
    type: "text",
    errorMessage: "Sub class is required",
    // isRequired: true,
  },
  {
    name: "accountClassificationID",
    type: "text",
    errorMessage: "Account Classification is required",
    // isRequired: true,
  },
  {
    name: "currencyCode",
    type: "text",
    errorMessage: "Currency is required",
    // isRequired: true,
  },
  {
    name: "isControlGL",
    type: "text",
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LedgerFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset, watch } =
    useDynamicForm<LedgerList>(fields, {});

  const { isValid } = formState;
  const [showSubClassField, setShowSubClassField] = useState(false);
  const [showClassificationField, setShowClassificationField] = useState(false);

  const ledgerClassID = watch("ledgerClassID");
  const ledgerSubClassID = watch("ledgerSubClassID");

  const { getRegionLists } = useRegions();
  const { getBranchLists } = useBranches();
  const { getCurrencyList } = useCurrencies();
  const { getLedgerClass, getLists, getLedgerList, addLedger } =
    useLedgerList();

  const { data: regionList } = getRegionLists();
  const { data: currencyList } = getCurrencyList();
  const { refetch: ledgerRefetch } = getLedgerList();
  const { data: branchList } = getBranchLists();
  const { data: ledgerClassList } = getLedgerClass();
  const { data: lists, refetch } = getLists(undefined, ledgerClassID);
  const { data: ledgerSubClassLists, refetch: subRefetch } = getLists(
    ledgerSubClassID,
    undefined
  );

  const regionListData = regionList?.data || [];
  const branchListData = branchList?.data || [];
  const classListData = ledgerClassList?.data || [];
  const ledgerClassificationListData = ledgerSubClassLists?.data || [];
  const ListData = lists?.data || [];
  const currencyListData = currencyList?.data || [];

  console.log(currencyListData, "currency");

  useEffect(() => {
    if (ledgerClassID) {
      setShowSubClassField(true);
      refetch();
    } else {
      setShowSubClassField(false);
    }
  }, [ledgerClassID, refetch]);

  useEffect(() => {
    if (ledgerSubClassID) {
      setShowClassificationField(true);
      refetch();
    } else {
      setShowClassificationField(false);
    }
  }, [ledgerSubClassID, subRefetch]);

  const status = [
    { value: "true", label: "True" },
    { value: "false", label: "False" },
  ];

  const RegionOptions = regionListData?.map((reg: RegionDataItem) => ({
    value: reg?.id?.toString(),
    label: reg?.name,
  }));

  const BranchOptions = branchListData?.map((reg: BranchDataItem) => ({
    value: reg?.branchId?.toString(),
    label: reg?.branchName,
  }));

  const ClassListOptions = classListData?.map((reg: ClassListItem) => ({
    value: reg?.id?.toString(),
    label: reg?.name,
  }));

  const subClassListOption = Array.isArray(ListData)
    ? ListData?.map((list: any) => ({
        value: list?.id?.toString(),
        label: list?.name,
      }))
    : [];

  const currencyListOption = Array.isArray(currencyListData)
    ? currencyListData?.map((list: any) => ({
        value: list?.currId?.toString(),
        label: list?.curr,
      }))
    : [];

  const accountClassListOption = Array.isArray(ledgerClassificationListData)
    ? ledgerClassificationListData?.map((list: any) => ({
        value: list?.id?.toString(),
        label: list?.name,
      }))
    : [];

  const { mutate, isPending } = addLedger;

  const onSubmit = (data: any) => {
    const transformedData = {
      ...data,
      branchID: Number(data?.branchID),
      regionID: Number(data?.regionID),
      ledgerClassID: Number(data?.ledgerClassID),
      ledgerSubClassID: Number(data?.ledgerSubClassID),
      accountClassificationID: Number(data?.accountClassificationID),
      currencyCode: Number(data?.currencyCode),
      isControlGL: data?.isControlGL === "true",
      status: true,
    };

    mutate(transformedData, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        ledgerRefetch();
        reset();
        setIsOpen(false);
      },
      onError: (error: any) => {
        toast.error(error?.message || "Error creating List");
      },
    });
  };

  return (
    <>
      <SheetContent side="adjusted" className="">
        <ModalHeader title="Add Ledger List" icon={X} description="Close" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="w-full flex flex-col gap-5">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="acctName"
                control={control}
                placeholder="enter ledger name"
                type="text"
                label="Ledger Name"
                rules={{ required: true }}
                variant="primary"
              />
              <CustomSelect
                name="regionID"
                options={RegionOptions}
                control={control}
                rules={{ required: true }}
                placeholder="Select Region"
                label=" Region"
                dropdownChoice
              />
              <CustomSelect
                name="branchID"
                options={BranchOptions}
                control={control}
                rules={{ required: true }}
                placeholder="Select Branch"
                label="Branch"
                dropdownChoice
              />
              <CustomSelect
                name="ledgerClassID"
                options={ClassListOptions}
                control={control}
                rules={{ required: true }}
                placeholder="Select Ledger Class Ledger"
                label="Ledger Class Ledger"
                dropdownChoice
              />
              {showSubClassField && (
                <CustomSelect
                  options={subClassListOption}
                  control={control}
                  placeholder="Select Sub Class"
                  label="Sub Class"
                  name="ledgerSubClassID"
                  dropdownChoice
                />
              )}

              {showClassificationField && (
                <CustomSelect
                  options={accountClassListOption}
                  control={control}
                  placeholder="Select Ledger Classification"
                  label="Ledger Classification"
                  name="accountClassificationID"
                  dropdownChoice
                />
              )}
              <CustomSelect
                options={currencyListOption}
                control={control}
                placeholder="Select Currency"
                label="Currency Code"
                name="currencyCode"
                dropdownChoice
              />
              <CustomSelect
                options={status}
                control={control}
                rules={{ required: true }}
                placeholder="IsControlLG (TF)"
                label="IsControlLG"
                name="isControlGL"
                dropdownChoice
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add List"
              type="submit"
              className="w-[378px] rounded-lg mt-36 py-3"
              disabled={!isValid}
              isLoading={isPending}
            />
          </ModalFooter>
        </form>
      </SheetContent>
    </>
  );
};
